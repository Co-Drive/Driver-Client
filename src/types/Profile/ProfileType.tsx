export interface GithubInfoProps {
  github: string;
  handleChangeInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IntroInfoProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength?: number;
}

export interface LanguageInfoProps {
  selectedTag: string;
  handleChangeTag: (value: string) => void;
}

export interface NickNameInfoProps {
  nickname: string;
  changeNickname: {isExitNickname: boolean, isClickedCheckBtn: boolean};
  handleChangeInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNicknameCheck: () => void;
}

export interface NameInfoProps {
  user: string;
}
