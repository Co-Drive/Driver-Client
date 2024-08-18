import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// interface CalendarProps {
//   ValuePiece : Date | null;
//   Value : ValuePiece | [ValuePiece, ValuePiece];
// }

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CommonCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <Calendar
      onChange={onChange}
      locale="en"
      value={value}
      next2Label={null}
      prev2Label={null}
      view="month"
      showNeighboringMonth={true}
      calendarType="islamic"
    />
  );
};

export default CommonCalendar;
