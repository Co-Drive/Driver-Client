export interface GroupSettingProps {
  isPublicGroup: boolean;
  handleActiveChange: (active: boolean) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  secretKey: string;
}

export interface ProgressSectionProps {
  progressValue: string;
  handleChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface CreateButtonProps {
  isActive: boolean;
  handleGroupCreate: () => void;
}

export interface ImageSectionProps {
  previewImage: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IntroSectionProps {
  introValue: string;
  handleChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface LanguageSectionProps {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
  onChangeTags: (tags: string[]) => void;
}

export interface TitleSectionProps {
  titleValue: string;
  recruitedValue: string;
  handleMemberCountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
