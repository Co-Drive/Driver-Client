export interface GroupSettingProps {
  isPublicGroup: boolean;
  handleActiveChange: (active: boolean) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  secretKey: string;
}
