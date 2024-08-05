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
