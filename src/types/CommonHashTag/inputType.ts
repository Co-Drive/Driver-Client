export interface CommonHashTagProps {
  selectedTag: string;
  removeTag: (event?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
