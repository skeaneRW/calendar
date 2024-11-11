const MonthView = ({ month, year }: { month: number; year: number }) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const totalSquares = 42;
  const numberOfPriorDays = new Date(year, month, 1).getDay();
  const numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();
  const numberOfDaysInPriorMonth = new Date(year, month, 0).getDate();
  const numberOfRemainingDays =
    totalSquares - numberOfPriorDays - numberOfDaysInMonth;

  return (
    <div className="mt-6">
      <div id="daysOfWeek" className="grid grid-cols-7 gap-1">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-sm font-semibold">
            {day}
          </div>
        ))}
      </div>
      <div id="calendarDays" className="grid grid-cols-7">
        {Array.from({ length: numberOfPriorDays }).map((_, i) => (
          <div
            key={i}
            className="text-xs text-right border text-slate-800 dark:text-slate-100 text-opacity-40 border-slate-800 dark:border-slate-100  border-opacity-10 p-1 aspect-square"
          >
            {numberOfDaysInPriorMonth - numberOfPriorDays + i + 1}
          </div>
        ))}
        {Array.from({ length: numberOfDaysInMonth }).map((_, i) => (
          <div
            key={i}
            className="text-xs text-right border text-slate-800 dark:text-slate-100 border-slate-800 dark:border-slate-100  border-opacity-10  p-1 aspect-square"
          >
            {i + 1}
          </div>
        ))}
        {Array.from({ length: numberOfRemainingDays }).map((_, i) => (
          <div
            key={i}
            className="text-xs text-right border text-slate-800 dark:text-slate-100 text-opacity-40 border-slate-800 dark:border-slate-100  border-opacity-10 p-1 aspect-square"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthView;
