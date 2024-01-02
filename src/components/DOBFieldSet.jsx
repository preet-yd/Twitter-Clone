import React from 'react'

const MonthOptions = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September",
  "October", "November", "December"
]

const DAYS = Array.from({ length: 31 }, (_, index) => index + 1);

const INITIAL_YEAR = 1984;

const YearOptions = Array.from({ length: new Date().getFullYear() - INITIAL_YEAR + 1 }, (_, index) => INITIAL_YEAR + index);


function DOBFieldSet() {
  return (
    <div className="flex w-full gap-3 self-stretch">
      <section>
        <fieldset className="group flex items-center self-stretch h-16 w-full px-4 py-3 rounded border border-neutral-500 border-solid focus-within:border-twitter-blue">
          <legend className="text-neutral-500 font-inter text-xs font-medium leading-normal px-2 group-focus-within:text-twitter-blue">Month</legend>
          <select placeholder="Month" className="text-neutral-50 pb-2 font-inter text-base font-normal leading-normal w-full bg-neutral-950 outline-none ">
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </fieldset>
      </section>

      <section >
        <fieldset className="group flex items-center self-stretch h-16 w-full px-4 py-3 rounded border border-neutral-500 border-solid focus-within:border-twitter-blue">
          <legend className="text-neutral-500 font-inter text-xs font-medium leading-normal px-2 group-focus-within:text-twitter-blue">Month</legend>
          <select placeholder="Month" className="text-neutral-50 pb-2 font-inter text-base font-normal leading-normal w-full bg-neutral-950 outline-none ">
            {DAYS.map(day => (
              <option key={day}>{day}</option>
            ))}
          </select>
        </fieldset>
      </section>

      <section >
        <fieldset className="group flex items-center self-stretch h-16 w-full px-4 py-3 rounded border border-neutral-500 border-solid focus-within:border-twitter-blue">
          <legend className="text-neutral-500 font-inter text-xs font-medium leading-normal px-2 group-focus-within:text-twitter-blue">Year</legend>
          <select placeholder="Year" className="text-neutral-50 pb-2 font-inter text-base font-normal leading-normal w-full bg-neutral-950 outline-none ">
            {YearOptions.map(year => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </fieldset>
      </section>
    </div>
  )
}

export default DOBFieldSet