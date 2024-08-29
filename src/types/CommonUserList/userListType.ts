export interface CommonUserListProps {
  isAdmin?: boolean;
  sorting: string;
  selectedGroupId: number;
  isFollowerList: boolean;
}

export interface UserType {
  userId: number;
  nickname: string;
  profileImg: string;
  language: string;
  successRate: number;
  recentProblemTitle: string;
}

export interface ParticipantType {
  user: UserType;
  status: string;
}
