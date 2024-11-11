import { useState } from "react";
import DayView from "./DayView/DayView";
import WeekView from "./WeekView/WeekView";
import MonthView from "./MonthView/MonthView";
import CalendarFrame from "./CalendarFrame";

type CalendarProps = {
  bgColor?: string;
  color?: string;
};
type View = "day" | "week" | "month";

const Calendar = ({ bgColor = "", color = "" }: CalendarProps) => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState<View>("month");
  const month = date.getMonth();
  const year = date.getFullYear();

  const currentView = (view: View) => {
    switch (view) {
      case "day":
        return <DayView />;
      case "week":
        return <WeekView />;
      case "month":
        return <MonthView month={month} year={year} />;
    }
  };

  return (
    <CalendarFrame
      setDate={setDate}
      date={date}
      setView={setView}
      bgColor={bgColor}
      color={color}
    >
      {currentView(view)}
    </CalendarFrame>
  );
};

export default Calendar;
