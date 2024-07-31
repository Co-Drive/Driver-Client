export interface RecommendGroupProps {
  user: string;
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
