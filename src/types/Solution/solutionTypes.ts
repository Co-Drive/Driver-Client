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

export interface SavedSolutionListProps {
  userId: number;
  isSmallList: boolean;
  handleDisabledMoreBtn?: (value: boolean) => void;
}

export interface recordType {
  recordId: number;
  title: string;
  level: number;
  tags: Array<string>;
  platform: string;
  problemUrl: string;
  createdAt: string;
}

export interface SavedSolutionProps {
  record: recordType;
  followerId?: number;
  isModal?: boolean;
  removeBorder?: boolean;
}

export interface LevelProps {
  level: number;
}

export interface CalendarProps {
  followerId: number | undefined;
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

export interface ClickedValueProps {
  clickedPage: number;
}

export interface ListFilterProps {
  sorting: string;
  year: number;
  month: number | boolean;
  followerId: number | undefined;
  handleClickSorting: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
}

export interface getMonthlySolutionProps {
  userId: number;
  year: number;
  month: number | boolean;
  page: number;
  sortType?: string;
}
