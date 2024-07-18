export interface CommonTextareaProps {
  category: string;
  value: string;
  handleChangeInputs: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
