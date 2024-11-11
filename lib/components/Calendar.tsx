import DayView from "./DayView/DayView";
import WeekView from "./WeekView/WeekView";
import MonthView from "./MonthView/MonthView";
import CalendarFrame from "./CalendarFrame";

const Calendar = () => {
  return (
    <CalendarFrame>
      <DayView />
      <WeekView />
      <MonthView />
    </CalendarFrame>
  );
};

export default Calendar;
