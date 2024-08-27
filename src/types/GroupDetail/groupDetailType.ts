export interface ApplicationModalProps {
  id: number;
  onClose: () => void;
}

export interface GroupDetailHeaderProps {
  title: string;
  tags: Array<string>;
}

export interface GroupInfoProps {
  id: number;
  owner: {
    userId: number;
    nickname: string;
    profileImg: string;
  };
  requestedCount: number;
  capacity: number;
  introduce: string;
  information: string;
}
