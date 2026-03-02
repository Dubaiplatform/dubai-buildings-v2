"use client";

import * as React from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  searchBoolen?: boolean;
}

export function MultiSelect({
  options,
  selected,
  onChange,
  placeholder = "Select options",
  searchBoolen = false,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleSelect = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  const handleRemove = (option: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onChange(selected.filter((item) => item !== option));
  };

  // React.useEffect(() => {
  //   if (open) {
  //     setTimeout(() => {
  //       inputRef.current?.focus();
  //     }, 0);
  //   }
  // }, [open]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-12 px-4 text-left font-light bg-black/50 border-border/50 hover:border-foreground/50 transition-all"
        >
          <div className="flex gap-2 flex-1 overflow-x-auto no-scrollbar whitespace-nowrap">
            {selected.length > 0 ? (
              <>
                {selected.slice(0, 2).map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="bg-foreground text-background px-2.5 py-0.5 text-xs font-light rounded-md"
                  >
                    {item}
                    <button
                      className="ml-1.5 hover:text-muted-foreground transition-colors"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleRemove(item, e as any);
                        }
                      }}
                      onMouseDown={(e) => handleRemove(item, e)}
                      type="button"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
                {selected.length > 2 && (
                  <Badge
                    variant="secondary"
                    className="bg-muted text-foreground px-2.5 py-0.5 text-xs font-light rounded-md"
                  >
                    +{selected.length - 2} more
                  </Badge>
                )}
              </>
            ) : (
              <span className="text-muted-foreground text-sm font-light">
                {placeholder}
              </span>
            )}
          </div>
          <ChevronDown
            className={`ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0 bg-black border-border/50 text-white!"
        align="start"
        onOpenAutoFocus={(e: any) => {
          e.preventDefault();

          if (!isMobile) {
            inputRef.current?.focus();
          }
        }}
      >
        <Command className="bg-transparent">
          {searchBoolen && (
            <CommandInput
              placeholder="Search..."
              className="h-10 border-b border-border/30 font-light"
              ref={inputRef}
            />
          )}
          <CommandList className="max-h-64">
            <CommandEmpty className="py-6 text-center text-sm text-muted-foreground font-light">
              No results found.
            </CommandEmpty>
            <CommandGroup className="p-2">
              {options.map((option) => {
                const isSelected = selected.includes(option);
                return (
                  <CommandItem
                    key={option}
                    onSelect={() => handleSelect(option)}
                    className="cursor-pointer px-3 py-2.5 rounded-md aria-selected:bg-muted/50 font-light"
                  >
                    <div
                      className={`mr-3 flex h-4 w-4 items-center justify-center rounded-sm border transition-all ${
                        isSelected
                          ? "bg-foreground border-foreground"
                          : "border-border/50"
                      }`}
                    >
                      {isSelected && (
                        <Check className="h-3 w-3 text-background" />
                      )}
                    </div>
                    <span className="text-sm">{option}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
