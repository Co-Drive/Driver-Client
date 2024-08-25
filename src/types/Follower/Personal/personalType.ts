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
