export interface FollowerInfoProps {
  info: {
    profileImg: string;
    nickname: string;
    isFollowed: boolean;
    introduce: string;
    language: string;
    github?: string;
    rate: number;
  };
}

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
    id: number;
    profileImg: string;
    nickname: string;
    language: string;
    github?: string;
    isFollowed: boolean;
  }>;
}
