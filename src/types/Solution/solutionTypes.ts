export interface RecordsTypes {
  title: string;
  // date: string;
  level: number;
  tags: Array<string>;
  platform: string;
  problemUrl: string;
  codeblocks: Array<{
    code: string;
    memo: string;
  }>;
}

export interface SolutionHeaderTopProps {
  recordId: number;
  followerInfo?: {
    profileImg: string;
    nickname: string;
  };
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
}

export interface LevelProps {
  level: number;
}

export interface CalendarProps {
  date: {
    clickedYear: number;
    clickedMonth: number;
  };
  handleClickPrevBtn: () => void;
  handleClickMonth: (month: number) => void;
  handleClickNextBtn: () => void;
}

export interface UpdateTotalPageProps {
  data: {
    totalPage: number;
  };
}

export interface UpdateRecordsProps {
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
}
