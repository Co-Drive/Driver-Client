export interface ActiveGroupProps {
  totalActiveGroups: Array<{
    id: number;
    title: string;
    contents: string;
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
