export interface HomeProfileCardProps {
  user: {
    userId: number;
    successRate: number;
    profileImg: string;
    nickname: string;
    language: string;
  };
}

export interface CustomLabelProps {
  profileImg: string;
}
