/* stylelint-disable selector-class-pattern */
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import styled from 'styled-components';

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
        minDetail="month"
        maxDetail="month"
        formatShortWeekday={(_, date) => customWeekdays[date.getDay()]}
      />
    </Wrapper>
  );
};

export default CommonCalendar;

const Wrapper = styled.div`
  .react-calendar {
    background-color: ${({ theme }) => theme.colors.gray800};
  }
`;

const StyledCalendar = styled(Calendar)`
  .react-calendar {
    background-color: pink;
  }
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
    /* background-color: red; */
    color: white; /* 요일 텍스트 색상 */
    font-weight: bold; /* 요일 텍스트 두께 */
    font-size: 16px; /* 요일 텍스트 크기 */

    text-align: center; /* 가운데 정렬 */
  }
`;
