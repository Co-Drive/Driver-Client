export interface CodeProps {
  newCode: string;
  stringId: string;
}

interface ChangeCodeFnProps {
  handleChangeCode: ({ newCode, stringId }: CodeProps) => void;
}

interface ChangeMemoFnProps {
  handleChangeMemo: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface ClickQuestionInfoProps {
  category: string;
  e?:
    | React.MouseEvent<HTMLLIElement, MouseEvent>
    | React.ChangeEvent<HTMLInputElement>;
  clickedValue?: string | Array<string>;
}

interface ClickQuestionInfoFnProps {
  handleClickQuestionInfo: ({ category, e }: ClickQuestionInfoProps) => void;
}

export interface CodeEditorProps {
  isReadOnly: boolean;
  stringId: string;
  code: string;
  handleChangeCode?: ({ newCode, stringId }: CodeProps) => void;
}

export interface MemoProps {
  isReadOnly: boolean;
  stringId: string;
  memo: string;
  handleChangeMemo?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface HeaderTopProps extends ClickQuestionInfoFnProps {
  title: string;
  level: number;
}

export interface CodeSpaceHeaderProps extends ClickQuestionInfoFnProps {
  questionInfo: {
    title: string;
    tags: Array<string>;
    level: number;
    platform: string;
    problemUrl: string;
  };
}

export interface CodeSpaceProps
  extends CodeSpaceHeaderProps,
    ChangeCodeFnProps,
    ChangeMemoFnProps {
  ideItems: Array<{ id: number; code: string; memo: string }>;
  handleClickDeleteBtn: (id: number) => void;
}

export interface QuestionInfoProps {
  title: string;
  level: number;
  tags: Array<string>;
  platform: string;
  problemUrl: string;
}

export interface PostRecordsProps {
  questionInfo: {
    title: string;
    level: number;
    tags: Array<string>;
    platform: string;
    problemUrl: string;
  };

  codeblocks: Array<{ id: number; code: string; memo: string }>;
}

export interface PageHeaderProps extends PostRecordsProps {
  id?: number;
}

export interface HeaderBottomProps extends ClickQuestionInfoFnProps {
  questionInfo: {
    tags: Array<string>;
    platform: string;
    problemUrl: string;
  };
}

export interface UpdateQuestionInfoProps {
  category: string;
  value: string | Array<string>;
}

export interface ClickedListProps {
  category: string;
  selectedValue: string;
}

export interface ModalProps {
  onClose?: () => void;
}
