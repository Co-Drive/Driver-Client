export interface ParticipatingGroupProps {
  group: Array<{
    id: number;
    imgSrc: string;
    title: string;
    tags: Array<string>;
    introduce: string;
  }>;
}

export interface FollowerRecommendCardProps {
  recommend: Array<{
    profileImg: string;
    nickname: string;
    language: string;
    isFollowed: boolean;
  }>;
}
