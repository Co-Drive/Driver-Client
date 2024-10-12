export interface FollowerInfoProps {
  info: {
    comment: string;
    githubUrl: string;
    isFollowing: boolean;
    language: string;
    nickname: string;
    profileImg: string;
    successRate: number;
  };
}

export interface UpdateFollowerProps {
  isDelete: boolean;
  nickname: string;
}

export interface ParticipatingGroupProps {
  nickname: string;
}

export interface ClickCardProps {
  userId: number;
  groupId: number;
  isMember: boolean;
  isPublicRoom: boolean;
}
