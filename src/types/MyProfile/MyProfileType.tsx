export interface ProfileEdiltProps {
  handleCloseModal: () => void;
  initialData: {
    comment: string;
    githubUrl: string;
    language: string;
    nickname: string;
  };
}
