export interface ActiveGroupProps {
  totalActiveGroups: Array<{
    roomId: number;
    title: string;
    introduce: string;
    tags: Array<string>;
    ownerId: number;
    isMember: boolean;
    isPublicRoom: boolean;
  }>;
}

export interface GroupType {
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
  isMember: boolean;
  isPublicRoom: boolean;
}

export interface PersonalGroupProps {
  totalPage: number;
  group: Array<GroupType>;
}

export interface GetRoomsProps {
  sortType: string;
  page?: number;
  status?: string;
  isJoinedRooms: boolean;
  followerId?: number;
}
