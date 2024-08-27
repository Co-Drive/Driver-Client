export interface ActiveGroupProps {
  totalActiveGroups: Array<{
    roomId: number;
    title: string;
    introduce: string;
    tags: Array<string>;
  }>;
}

export interface PersonalGroupProps {
  totalPage: number;
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
  clickedPage: number;
  handleClickPages: {
    handleClickPrevBtn: () => void;
    handleClickPage: (page: number) => void;
    handleClickNextBtn: () => void;
  };
}

export interface GetRoomsProps {
  sortType: string;
  page: number;
  status: string;
  isJoinedRooms: boolean;
}
