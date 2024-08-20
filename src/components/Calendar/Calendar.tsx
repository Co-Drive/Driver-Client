/* stylelint-disable selector-class-pattern */
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import styled from 'styled-components';
// import Calendar * as Calendar from '../Solution/List/Calendar';

type ValuePiece = Date | null;

type SelectedDate = ValuePiece | [ValuePiece, ValuePiece];

const CommonCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());
  useEffect(() => {
    console.log(selectedDate);
  });
  const customWeekdays = ['S', 'S', 'M', 'T', 'W', 'T', 'F'];
  return (
    <Wrapper>
      <StyledCalendar
        onChange={setSelectedDate}
        locale="en"
        value={selectedDate}
        next2Label={null}
        prev2Label={null}
        view="month"
        showNeighboringMonth={true}
        formatShortWeekday={(_, date) => customWeekdays[date.getDay()]}
      />
    </Wrapper>
  );
};

export default CommonCalendar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  .react-calendar {
    border: none;
    background-color: ${({ theme }) => theme.colors.gray800};
  }
`;

const StyledCalendar = styled(Calendar)`
  /* stylelint-disable-next-line selector-class-pattern */
  .react-calendar__navigation {
    display: none;
  }

  /* stylelint-disable-next-line selector-class-pattern */
  .react-calendar__tile {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray500};
    color: ${({ theme }) => theme.colors.gray500};
    ${({ theme }) => theme.fonts.body_medium_16};
  }

  /* stylelint-disable-next-line selector-class-pattern */
  .react-calendar__month-view__weekdays__weekday {
    color: ${({ theme }) => theme.colors.white};

    text-decoration: none;

    ${({ theme }) => theme.fonts.body_eng_medium_16}
  }

  /* stylelint-disable-next-line selector-class-pattern */
  .react-calendar__month-view__weekdays__weekday abbr[title] {
    text-decoration: none;
  }

  /* stylelint-disable-next-line selector-class-pattern */
  .react-calendar__month-view__days__day--neighboringMonth {
    background-color: ${({ theme }) => theme.colors.gray700};
    color: ${({ theme }) => theme.colors.gray700};
  }
`;
