"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import * as Popover from "@radix-ui/react-popover";
import { format, addMonths, subMonths } from "date-fns";

interface DateTimePickerContextType {
  date: Date | null;
  time: string;
  setDate: (value: Date) => void;
  setTime: (value: string) => void;
}

const DateTimePickerContext =
  React.createContext<DateTimePickerContextType | null>(null);

function useDateTimePicker() {
  const context = React.useContext(DateTimePickerContext);
  if (!context) {
    throw new Error("Must be used inside DateTimePicker.Root");
  }
  return context;
}

interface RootProps {
  date: Date | null;
  time: string;
  onDateChange: (value: Date) => void;
  onTimeChange: (value: string) => void;
  children: React.ReactNode;
}

function Root({ date, time, onDateChange, onTimeChange, children }: RootProps) {
  return (
    <DateTimePickerContext.Provider
      value={{
        date,
        time,
        setDate: onDateChange,
        setTime: onTimeChange,
      }}
    >
      <div className="space-y-4">{children}</div>
    </DateTimePickerContext.Provider>
  );
}

interface DateTriggerProps {
  asChild?: boolean;
  className?: string;
}

function DateTrigger({ asChild, className }: DateTriggerProps) {
  const { date } = useDateTimePicker();
  const [open, setOpen] = React.useState(false);
  const Comp = asChild ? Slot : "button";

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Comp
          type="button"
          className={`h-12 px-4 border border-border/50 bg-secondary/50 w-full text-left ${
            className || ""
          }`}
        >
          {date ? format(date, "PPP") : "Select date"}
        </Comp>
      </Popover.Trigger>

      <Popover.Content
        align="start"
        className="bg-black border border-border p-4 shadow-xl z-[9999]"
      >
        <Calendar onSelect={() => setOpen(false)} />
      </Popover.Content>
    </Popover.Root>
  );
}

function Calendar({ onSelect }: { onSelect?: () => void }) {
  const { date, setDate } = useDateTimePicker();

  const today = new Date();
  const todayStart = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const [currentMonth, setCurrentMonth] = React.useState<Date>(date || today);

  // Sync month when external date changes
  React.useEffect(() => {
    if (date) {
      setCurrentMonth(new Date(date));
    }
  }, [date]);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const startDay = firstDayOfMonth.getDay(); // 0 (Sun) - 6 (Sat)

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Prevent navigating to previous months if already at current month
  const isCurrentMonth =
    year === today.getFullYear() && month === today.getMonth();

  return (
    <div className="w-72 select-none ">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <button
          type="button"
          disabled={isCurrentMonth}
          onClick={() => setCurrentMonth(new Date(year, month - 1, 1))}
          className={`px-2 py-1 rounded ${
            isCurrentMonth
              ? "text-white/20 cursor-not-allowed"
              : "hover:bg-primary/20"
          }`}
        >
          ←
        </button>

        <span className="font-semibold text-sm">
          {format(currentMonth, "MMMM yyyy")}
        </span>

        <button
          type="button"
          onClick={() => setCurrentMonth(new Date(year, month + 1, 1))}
          className="px-2 py-1 hover:bg-primary/20 rounded"
        >
          →
        </button>
      </div>

      {/* Week Labels */}
      <div className="grid grid-cols-7 text-xs text-muted-foreground mb-2">
        {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
          <div key={day} className="text-center">
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-1 text-sm">
        {/* Empty spaces before first day */}
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {daysArray.map((day) => {
          const newDate = new Date(year, month, day);

          const selected =
            date &&
            newDate.getFullYear() === date.getFullYear() &&
            newDate.getMonth() === date.getMonth() &&
            newDate.getDate() === date.getDate();

          const isPast = newDate < todayStart;

          return (
            <button
              key={day}
              type="button"
              disabled={isPast}
              onClick={() => {
                if (isPast) return;
                setDate(newDate);
                onSelect?.();
              }}
              className={`
                h-9 w-9 rounded-md flex items-center justify-center
                transition-all duration-200
                ${
                  isPast
                    ? "text-white/20 cursor-not-allowed"
                    : selected
                      ? "bg-white text-black font-semibold ring-2 ring-primary"
                      : "hover:bg-white/20 text-white"
                }
              `}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TimeSelect() {
  const { time, setTime } = useDateTimePicker();

  const formatHour = (h: number) => {
    const period = h < 12 ? "am" : "pm";
    const displayHour = h % 12 === 0 ? 12 : h % 12;
    return `${displayHour}:00 ${period}`;
  };

  const times = Array.from({ length: 10 }, (_, i) => {
    const h = 9 + i; // 9am to 6pm (last slot: 6:00 to 7:00 pm)
    return {
      value: `${h.toString().padStart(2, "0")}:00`,
      label: `${formatHour(h)} to ${formatHour(h + 1)}`,
    };
  });

  return (
    <select
      value={time}
      onChange={(e) => setTime(e.target.value)}
      className="h-12 px-4 border border-border/50 bg-secondary/50 w-full"
    >
      <option value="">Select time</option>
      {times.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export const DateTimePicker = {
  Root,
  DateTrigger,
  TimeSelect,
};
