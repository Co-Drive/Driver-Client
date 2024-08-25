export interface ActiveGroupProps {
  totalActiveGroups: Array<{
    roomId: number;
    title: string;
    introduce: string;
    tags: Array<string>;
  }>;
}

export interface PersonalGroupProps {
  group: Array<{
    nickname: string;
    imgSrc: string;
    profile: string;
    num: number;
    title: string;
    tags: Array<string>;
    content: string;
  }>;
}
