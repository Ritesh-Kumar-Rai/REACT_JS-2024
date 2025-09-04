import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from '../ui/button';

import { Calendar } from "@/components/ui/calendar";

import { LucideCalendar } from 'lucide-react';
import { cn } from '@/lib/utils';

// Custom Error
class CalendarError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "CalendarError";
  }
};

const Date_Picker = ({ start_date = (new Date()).getFullYear() - 100, end_date = (new Date()).getFullYear() + 100 }) => {

  const [date, setDate] = React.useState(new Date());

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const years = Array.from({ length: (end_date - start_date) + 1 }, (_, i) => start_date + i); // to get a full list of years from start to end [200 in range]

  /*new Date(
    selected_year,
    prev.getMonth(),
    prev.getDate(),
    prev.getHours(),
    prev.getMinutes(),
    prev.getSeconds(),
    prev.getMilliseconds()
  )*/

  const handleMonthChange = (selected_month) => {
    try {
      if (!selected_month) throw new CalendarError("Month is not passed while selecting month on calendar!");
      console.log(selected_month);
      const monthIndex = months.indexOf(selected_month);
      setDate(prev => new Date(prev.getFullYear(), monthIndex, prev.getDate()));

    } catch (error) {
      console.error(`${error.name} -> ${error.message}`);
    }
  };

  const handleYearChange = (selected_year) => {
    try {
      if (!selected_year) throw new CalendarError("Year is not passed while selecting year on calendar!");
      console.log(selected_year);
      setDate(prev => new Date(Number(selected_year), prev.getMonth(), prev.getDate()));

    } catch (error) {
      console.error(`${error.name} -> ${error.message}`);
    }
  };

  const handleSelect = (selected_date) => {
    try {
      if (!selected_date) throw new CalendarError("selected date is not passed in function while selecting a date on calendar");
      console.log(date)
      setDate(selected_date);
      console.log(date.getFullYear())

    } catch (error) {
      console.error(`${error.name} -> ${error.message}`);
    }
  };


  return (
    <>
      <h2 className='text-2xl font-bold text-center'>Shadcn Date Picker Component</h2>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' className={cn('w-[250px] flex items-center justify-start text-left cursor-pointer', !date && 'text-muted-foreground')}>
            <LucideCalendar />
            {date ? new Date(date).toDateString() : <span>Pick a Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          {/* select component */}
          <div className='flex mt-1 justify-between px-2 py-1'>

            <Select value={months[date.getMonth()]} onValueChange={handleMonthChange}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                {months.map(month => <SelectItem key={month} value={month}>{month}</SelectItem>)}
              </SelectContent>
            </Select>

            <Select value={date.getFullYear()} onValueChange={handleYearChange}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                {years.map(year => <SelectItem key={year} value={year}>{year}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          {/* calender component */}
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            initialFocus
            month={date}
            onMonthChange={setDate}
            className="rounded-lg mt-2"
          />
        </PopoverContent>
      </Popover>
    </>
  )
}

export default Date_Picker;