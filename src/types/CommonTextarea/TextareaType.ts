export interface CommonTextareaProps {
  category: string;
  value: string;
  handleChangeTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
