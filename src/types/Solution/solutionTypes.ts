export interface RecordsTypes {
  title: string;
  level: number;
  tags: Array<string>;
  platform: string;
  problemUrl: string;
  codeblocks: Array<{
    code: string;
    memo: string;
  }>;
  createdAt: string;
}

export interface SolutionHeaderTopProps {
  recordId: number;
  followerId?: number;
  title: string;
  date: string;
  paintedStarArr: Array<number>;
}

export interface SavedSolutionProps {
  record: {
    recordId: number;
    title: string;
    level: number;
    tags: Array<string>;
    platform: string;
    problemUrl: string;
    createdAt: string;
  };
  followerId?: number;
  clickedPage?: number;
  isModal?: boolean;
  removeBorder?: boolean;
}

export interface LevelProps {
  level: number;
}

export interface CalendarProps {
  date: {
    clickedYear: number;
    clickedMonth: number;
  };
  unsolvedMonths: Array<number>;
  handleClickPrevBtn: () => void;
  handleClickMonth: (month: number) => void;
  handleClickNextBtn: () => void;
}

export interface UpdateTotalPageProps {
  data: {
    data: {
      totalPage: number;
    };
  };
}

export interface UpdateRecordsProps {
  data: {
    data: {
      records: [
        {
          recordId: number;
          title: string;
          level: number;
          createdAt: string;
        },
      ];
    };
  };
}

export interface UpdateSavedRecordsProps {
  data: {
    data: {
      records: [
        {
          recordId: number;
          title: string;
          level: number;
          tags: Array<string>;
          platform: string;
          problemUrl: string;
          createdAt: string;
        },
      ];
    };
  };
}

export interface ListFilterProps {
  sorting: string;
  year: number;
  month: number;
  handleClickSorting: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
  handleClickPrevBtn: (isPage: boolean) => void;
  handleClickMonth: (value: number, isPage: boolean) => void;
  handleClickNextBtn: (isPage: boolean) => void;
}

export interface getMonthlySolutionProps {
  userId: number;
  year: number;
  month: number;
  page: number;
  isSmallList: boolean;
  sortType?: string;
}
