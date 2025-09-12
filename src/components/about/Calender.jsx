import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function CalendarComponent({ handleDateSelection, selectedDate, setSelectedDate }) {
  const today = new Date();
  const startOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
  const endOfSecondMonth = new Date(today.getFullYear(), today.getMonth() + 3, 0); // last day of next 2nd month

  return (
    <div className="w-full">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={(date) => handleDateSelection(date)}
        showOutsideDays={true}
        disabled={{ before: today, after: endOfSecondMonth }}
        fromMonth={today} // prevent navigating to previous months
        toMonth={endOfSecondMonth} // prevent navigating beyond next 2 months
        classNames={{
          month: 'w-full space-y-2',
          nav: 'w-full flex items-center justify-between',
          caption_label: 'leading-7',
          month_caption: 'w-full text-center -mt-16',
          month_grid: 'flex flex-col gap-2',
          day_button:
            'hover:bg-primary hover:text-white cursor-pointer w-full h-full rounded-[4px]',
          selected: 'bg-primary text-white rounded-md',
          weekdays: 'grid grid-cols-7 w-full',
          weeks: 'flex flex-col gap-0.5',
          week: 'grid grid-cols-7 gap-0.5',
        }}
      />
    </div>
  );
}

export default CalendarComponent;
