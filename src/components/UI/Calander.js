import React, { useState } from 'react';
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react';

const Calendar = ({seletctedDate, selectDate}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const month = selectedDate.getMonth();
  const year = selectedDate.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const days = [];


  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  for (let i = 0; i < firstDayOfMonth; i++) {
    days.unshift(null);
  }

  const weeks = [];

  while (days.length > 0) {
    weeks.push(days.splice(0, 7));
  }

  const handlePrevMonth = (e) => {
    e.preventDefault();
    setSelectedDate(new Date(year, month - 1));
  };

  const handleNextMonth = (e) => {
    e.preventDefault();
    setSelectedDate(new Date(year, month + 1));
  };
  function compareDates(thisDay){
    const deadline = seletctedDate.getDate() + " - " + (seletctedDate.getMonth() + 1) + " - " + seletctedDate.getFullYear();
    const today = thisDay.getDate() + " - " + (thisDay.getMonth() + 1) + " - " + thisDay.getFullYear();
    return today == deadline;
  }
  return (
    <div className=" mx-auto w-auto">
      <div className="bg-white border shadow rounded-lg">
        <div className="flex items-center justify-between px-6 py-3 bg- rounded-t-lg">
          <div className="mt-2 flex w-full justify-between">
            <button className="rounded-full h-10 w-10 text-bold  hover:bg-opacity-40 hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray px-2" onClick={handlePrevMonth}>
              <ArrowLeft2 />
            </button>
          <div className=" font-medium text-xl">{new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
            <button className="rounded-full h-10 w-10 hover:bg-gray-600 hover:bg-opacity-40 focus:outline-none focus:shadow-outline-gray px-2" onClick={handleNextMonth}>
              <ArrowRight2 />
            </button>
          </div>
        </div>
        <div className="px-6 pb-4">
          <div className="flex mb-2 text-gray-500 text-sm">
            <div className="w-9 h-8 flex justify-center items-center text-center">Sun</div>
            <div className="w-9 h-8 flex justify-center items-center text-center">Mon</div>
            <div className="w-9 h-8 flex justify-center items-center text-center">Tue</div>
            <div className="w-9 h-8 flex justify-center items-center text-center">Wed</div>
            <div className="w-9 h-8 flex justify-center items-center text-center">Thu</div>
            <div className="w-9 h-8 flex justify-center items-center text-center">Fri</div>
            <div className="w-9 h-8 flex justify-center items-center text-center">Sat</div>
          </div>
          {weeks.map((week, i) => (
            <div className="flex  text-sm" key={i}>
              {week.map((day, j) => {
                const thisDay = new Date(year, month, day);
                
                return (
                  <>
                  
                    <div onClick={()=> {
                      selectDate(new Date(year, month, day))
                      }
                      } className={`w-9 h-8 rounded-full flex justify-center items-center text-center ${compareDates(thisDay) ? 'bg-[#EEF2FF] border border-[#818CF8] text-gray-700 border border-white' : undefined} ${day === null ? 'opacity-0' : ''}`} key={j}>
                      {day}
                    </div>
                  
               
                      </>
              )})}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;