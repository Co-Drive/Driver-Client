export interface HeaderProps {
  clickedCategory: string;
  handleClickCategory: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => void;
}
