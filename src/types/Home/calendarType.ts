export interface BoardProps {
  date: string;
  isSolved: boolean;
}
export interface CommonCalendarProps {
  clickedYear: number;
  clickedMonth: number;
  board: BoardProps[];
  setClickedYear: React.Dispatch<React.SetStateAction<number>>;
  setClickedMonth: React.Dispatch<React.SetStateAction<number>>;
}
