export interface CommonInputProps {
  category: string;
  value: string;
  isClickedCheckBtn?: boolean;
  isExitedNickname?: boolean;
  isNotMatchedPW?: boolean;
  handleChangeInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isExistRepositories?: boolean;
  isClickedCheckRepositoriesBtn?: boolean;
}
