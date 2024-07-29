export interface OptionsProps {
  onSelectOption: (option: string) => void;
}

export interface SelectProps {
  inputValue: string;
  isOpen: boolean;
  selectedTag: string;
  handleToggleDropdown: (e: React.MouseEvent<HTMLDivElement> | null) => void;
  handleChangeTag: (value: string) => void;
}
