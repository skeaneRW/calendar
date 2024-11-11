import { ReactNode } from "react";

type CalendarFrameProps = {
  children: ReactNode;
  date: Date;
  setDate: (date: Date) => void;
  setView: (view: "day" | "week" | "month") => void;
  bgColor: string;
  color: string;
};

const CalendarFrame = ({
  children,
  date,
  setDate,
  setView,
  bgColor,
  color,
}: CalendarFrameProps) => {
  const currentMonth = date.toLocaleString("default", { month: "long" });
  const currentYear = date.getFullYear();
  const propStyle = { backgroundColor: bgColor, color: color };

  const updateDate = (modifier: number) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + modifier);
    setDate(newDate);
  };

  return (
    <div
      className="p-3 border border-neutral-200 dark:border-neutral-500 rounded-md"
      style={propStyle}
    >
      <div className="flex gap-2 justify-center items-center">
        <div className="inline-flex rounded-md shadow-sm mb-2">
          <div
            aria-current="page"
            className="px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => updateDate(-1)}
          >
            {"<"}
          </div>
          <div
            className="px-4 py-1 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => setDate(new Date())}
          >
            today
          </div>
          <div
            className="px-2 py-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            onClick={() => updateDate(1)}
          >
            {">"}
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-xl font-semibold pe-3 min-w-48 flex-grow">
          {currentMonth} {currentYear}
        </p>
        <div className="inline-flex rounded-md shadow-sm">
          <div
            aria-current="page"
            className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-s-lg cursor-pointer"
            style={{ ...propStyle, borderColor: color }}
            onClick={() => setView("month")}
          >
            Month
          </div>
          <div
            className="px-4 py-2 text-sm font-medium border-t border-b border-gray-200 cursor-pointer"
            style={{ ...propStyle, borderColor: color }}
            onClick={() => setView("week")}
          >
            Week
          </div>
          <div
            className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-e-lg cursor-pointer"
            style={{ ...propStyle, borderColor: color }}
            onClick={() => setView("day")}
          >
            Agenda
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default CalendarFrame;
