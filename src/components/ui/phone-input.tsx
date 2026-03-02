"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

import { COUNTRIES } from "@/lib/country-list";

interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export function PhoneInput({
  value,
  onChange,
  placeholder = "Phone number",
  required = false,
}: PhoneInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [open, setOpen] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState<Country>(
    COUNTRIES.find((c) => c.dialCode === "+971") || COUNTRIES[0],
  );
  const [phoneNumber, setPhoneNumber] = React.useState("");

  React.useEffect(() => {
    // Set initial dial code if value is empty
    if (!value && selectedCountry) {
      onChange(selectedCountry.dialCode);
    }
    // Parse existing value if it contains a dial code
    if (value) {
      const country = COUNTRIES.find((c) => value.startsWith(c.dialCode));
      if (country) {
        setSelectedCountry(country);
        setPhoneNumber(value.substring(country.dialCode.length).trim());
      } else {
        setPhoneNumber(value);
      }
    }
  }, []);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setOpen(false);
    const newValue = phoneNumber
      ? `${country.dialCode} ${phoneNumber}`
      : country.dialCode;
    onChange(newValue);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPhone = e.target.value;

    // Limit to maximum 12 digits
    if (newPhone.length > 12) {
      newPhone = newPhone.slice(0, 12);
    }

    setPhoneNumber(newPhone);

    const newValue = newPhone
      ? `${selectedCountry.dialCode} ${newPhone}`
      : selectedCountry.dialCode;
    onChange(newValue);
  };

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="flex gap-2">
      <div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className=" justify-between h-12 w-32  bg-secondary/50 border-border/50 hover:border-foreground/50 transition-all font-light"
            >
              <span className="flex items-center gap-1 truncate">
                <span className="text-lg">{selectedCountry.flag}</span>
                <span className="text-sm">{selectedCountry.dialCode}</span>
              </span>
              <ChevronsUpDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-[320px] p-0 bg-card border-border/50"
            align="start"
            onOpenAutoFocus={(e) => {
              e.preventDefault();

              if (!isMobile) {
                inputRef.current?.focus();
              }
            }}
          >
            <Command className="bg-black">
              <CommandInput
                placeholder="Search country..."
                className="h-10 border-b border-border/30 font-light "
              />
              <CommandList className="max-h-[300px]">
                <CommandEmpty className="py-6 text-center text-sm text-muted-foreground font-light">
                  No country found.
                </CommandEmpty>
                <CommandGroup className="p-2">
                  {COUNTRIES.map((country) => (
                    <CommandItem
                      key={country.code}
                      onSelect={() => handleCountrySelect(country)}
                      className="cursor-pointer px-3 py-2.5 aria-selected:bg-muted/50 font-light"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <span className="text-lg">{country.flag}</span>
                        <div className="flex flex-col flex-1 min-w-0">
                          <span className="text-sm truncate">
                            {country.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {country.dialCode}
                          </span>
                        </div>
                        {selectedCountry.code === country.code && (
                          <Check className="h-4 w-4" />
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="w-full">
        <Input
          type="number"
          maxLength={12}
          minLength={8}
          placeholder={placeholder}
          value={phoneNumber}
          onChange={handlePhoneChange}
          required={required}
          className="flex-1 h-12 px-4 bg-secondary/50 border-border/50 focus:border-primary transition-colors font-light w-full"
        />
      </div>
    </div>
  );
}
