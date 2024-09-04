export interface PatchUserProps {
  nickname: string;
  language: string;
  comment: string;
  githubUrl: string;
}

export interface ProfileEdiltProps {
  handleCloseModal: () => void;
  initialData: {
    comment: string;
    githubUrl: string;
    language: string;
    nickname: string;
    name: string;
  };
}

export interface UserType {
  userId: number;
  profileImg: string;
  nickname: string;
  language: string;
  githubUrl: string;
  isFollowing: boolean;
}
