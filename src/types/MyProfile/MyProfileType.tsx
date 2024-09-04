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
