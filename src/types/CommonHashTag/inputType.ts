export interface CommonHashTagProps {
  selectedTag: string;
  inputValue: string;
  onTagChange: (tag: string) => void;
  onInputChange: (value: string) => void;
}
