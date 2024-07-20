export interface HeaderProps {
  isLogin: boolean;
  nickname: string;
  clickedCategory: string;
  handleClickCategory: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
}
