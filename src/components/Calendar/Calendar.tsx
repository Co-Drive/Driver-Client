/* stylelint-disable selector-class-pattern */
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import styled from 'styled-components';
import { IcArrowBottomWhite, IcArrowTopWhite, IcCalendar } from '../../assets';
import CustomCalendar from './CustomCalendar';

type ValuePiece = Date | null;

type SelectedDate = ValuePiece | [ValuePiece, ValuePiece];

const CommonCalendar = () => {
  const today = new Date();
  const year = today.getFullYear();
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(today);
  const [clickedYear, setClickedYear] = useState(year);
  const [clickedMonth, setClickedMonth] = useState(today.getMonth() + 1);

  const [isCalendarClicked, setIsCalendarClicked] = useState(false);

  const customWeekdays = ['S', 'S', 'M', 'T', 'W', 'T', 'F'];

  const handleClickCalendar = () => {
    setIsCalendarClicked((prev) => !prev);
  };

  const handleClickPrevBtn = () => {
    setClickedYear((prevYear) => prevYear - 1);
  };

  const handleClickNextBtn = () => {
    setClickedYear((prevYear) => prevYear + 1);
  };

  const handleClickMonth = (month: number) => {
    const newDate = new Date(clickedYear, month - 1, today.getDate());
    setClickedMonth(month);
    setSelectedDate(newDate);
    setIsCalendarClicked(false);
  };

  return (
    <CalendarContainer>
      <NavContainer>
        <IcCalendar onClick={handleClickCalendar} />
        <DateContainer>
          <Year>{clickedYear}년</Year>
          <Month>{clickedMonth}월</Month>
        </DateContainer>
        {isCalendarClicked ? (
          <CustomCalendarContainer>
            <IcArrowTopWhite onClick={handleClickCalendar} />
            <CustomCalendar
              date={{ clickedYear, clickedMonth }}
              unsolvedMonths={[]}
              handleClickPrevBtn={handleClickPrevBtn}
              handleClickMonth={handleClickMonth}
              handleClickNextBtn={handleClickNextBtn}
            />
          </CustomCalendarContainer>
        ) : (
          <IcArrowBottomWhite onClick={handleClickCalendar} />
        )}
      </NavContainer>
      <StyledCalendar
        onChange={(value) => setSelectedDate(value)}
        locale="ko-KR"
        value={selectedDate}
        showNeighboringMonth={true}
        formatShortWeekday={(_, date) => customWeekdays[date.getDay()]}
        showNavigation={false}
      />
    </CalendarContainer>
  );
};

export default CommonCalendar;

const CalendarContainer = styled.div`
  .react-calendar {
    width: 28.6rem;

    border: none;
    background-color: ${({ theme }) => theme.colors.gray800};
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 17.9rem;
  padding: 1.3rem 1.4rem;
  margin-bottom: 3.4rem;
  margin-left: 10.7rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray700};

  max-width: 17.9rem;

  outline: 0.1rem solid ${({ theme }) => theme.colors.gray500};
`;

const DateContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  padding-right: 0.2rem;
  padding-left: 1.4rem;
`;

const Year = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const Month = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const CustomCalendarContainer = styled.div`
  left: 0;
`;
const StyledCalendar = styled(Calendar)`
  /* stylelint-disable-next-line selector-class-pattern */
  .react-calendar__tile {
    width: 4rem;
    height: 4rem;

    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.gray500};
    color: ${({ theme }) => theme.colors.gray500};

    ${({ theme }) => theme.fonts.body_medium_16};
    abbr {
      position: absolute;
      overflow: hidden;

      width: 0.1rem;
      height: 0.1rem;

      border: 0;
      clip: rect(1px, 1px, 1px, 1px);
    }
  }

  /* stylelint-disable-next-line selector-class-pattern */
  .react-calendar__month-view__weekdays__weekday {
    color: ${({ theme }) => theme.colors.white};

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
    pointer-events: none;
  }

  /* stylelint-disable-next-line selector-class-pattern */
  .react-calendar__tile:enabled:hover {
    background-color: ${({ theme }) => theme.colors.gray500};
  }
  /* stylelint-disable-next-line selector-class-pattern */
  .react-calendar__tile:enabled:focus {
    background-color: ${({ theme }) => theme.colors.gray500};
  }
`;
