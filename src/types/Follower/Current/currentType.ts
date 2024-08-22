export interface FollowerHeaderProps {
  filter: {
    clickedGroup: string;
    isOptionOpen: boolean;
    sorting: string;
  };
  handleClickInput: () => void;
  handleClickOption: (selectedGroup: string) => void;
  handleClickSorting: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
}

export interface WeeklyCurrentProps {
  clickedPage: number;
}

export interface ClickDailyBoardProps {
  nickname: string;
  date: string;
}

export interface WeeklyCurrentGraphProps {
  percentage: number;
}

export interface FollowerCurrentGraphProps {
  users: Array<{
    userId: number;
    nickname: string;
    problemNum: number;
  }>;
}
