export interface RecommendCardProps {
  group: Array<{
    roomId: number;
    title: string;
    owner: {
      userId: number;
      nickname: string;
      profileImg: string;
    };
    imageSrc: string;
    memberCount: number;
    capacity: number;
    tags: Array<string>;
    introduce: string;
  }>;
  isLongPage: boolean;
}
