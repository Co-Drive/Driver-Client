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
    nickname: string;
    count: number;
  }>;
}

interface FollowingsType {
  users: Array<{ nickname: string; profileImg: string; userId: number }>;
}

export interface SolverProps extends FollowingsType {
  currentPage: number;
}

export interface GetFollowerSummaryProps {
  sortType: string;
  page: number;
  groupId?: number;
}

export interface FollowerFilterProps {
  sorting: string;
  updateSelectedGroupId: (id: number) => void;
  handleClickSorting: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export interface AdditionalProblemsModalProps {
  userId: number;
}

export interface FollowerRecordsType {
  recordId: number;
  title: string;
  level: number;
  tags: Array<string>;
  platform: string;
  problemUrl: string;
  createdAt: string;
}
