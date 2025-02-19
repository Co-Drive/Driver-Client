export interface BoardProps {
  date: string;
  isSolved: boolean;
}
export interface CommonCalendarProps {
  clickedYear: number;
  clickedMonth: number;
  data: {
    data: {
      board: BoardProps[];
    };
  };
  setClickedYear: React.Dispatch<React.SetStateAction<number>>;
  setClickedMonth: React.Dispatch<React.SetStateAction<number>>;
}
