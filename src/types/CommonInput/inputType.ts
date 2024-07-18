export interface CommonInputProps {
  category: string;
  value: string;
  isExitedNickname?: boolean;
  isNotMatchedPW?: boolean;
  handleChangeInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
