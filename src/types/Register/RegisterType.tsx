export interface OptionsProps {
  onSelectOption: (option: string) => void;
}

export interface SelectProps {
  inputValue: string;
  isOpen: boolean;

  handleToggleDropdown: (shouldClose: boolean) => void;
  handleChangeTag: (value: string) => void;
}

export interface SelectBoxProps {
  selectedTag: string;
  handleChangeTag: (value: string) => void;
}

export interface NickNameProps {
  nickname: string;
  changeNickname: {
    isExistNickname: boolean;
    isClickedCheckBtn: boolean;
  };
  handleChangeInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNicknameCheck: () => void;
}

export interface LanguageProps {
  selectedTag: string;
  handleChangeTag: (value: string) => void;
}

export interface IntroProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength?: number;
}

export interface GithubProps {
  github: string;
  handleChangeInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
