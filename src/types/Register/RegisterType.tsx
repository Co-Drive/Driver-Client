export interface OptionsProps {
  onSelectOption: (option: string) => void;
}

export interface SelectProps {
  inputValue: string;
  isOpen: boolean;
  selectedTag: string;
  handleToggleDropdown: (shouldClose: boolean) => void;
  handleChangeTag: (value: string) => void;
}
