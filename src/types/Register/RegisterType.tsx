export interface OptionsProps {
  onSelectOption: (option: string) => void;
}

export interface SelectProps {
  inputValue: string;
  isOpen: boolean;
  selectedTag: string;
  onToggleDropdown: (e: React.MouseEvent<HTMLDivElement> | null) => void;
  onTagChange: (value: string) => void;
}
