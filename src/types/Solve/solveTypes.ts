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
  isOpenOptions: boolean;
}

export interface CodeSpaceProps
  extends CodeSpaceHeaderProps,
    ChangeCodeFnProps,
    ChangeMemoFnProps {
  ideItems: Array<{ id: number; code: string; memo: string }>;
  handleClickDeleteBtn: (id: number) => void;
  isOpenOptions: boolean;
}

export interface QuestionInfoProps {
  title: string;
  level: number;
  tags: Array<string>;
  platform: string;
  problemUrl: string;
}

export interface PostRecordsProps {
  id?: number;
  questionInfo: {
    title: string;
    level: number;
    tags: Array<string>;
    platform: string;
    problemUrl: string;
  };

  codeblocks: Array<{ id: number; code: string; memo: string }>;
}

export interface PatchRecordsProps extends PostRecordsProps {
  id: number;
}

export interface PageHeaderProps extends PostRecordsProps {
  isTemp?: boolean;
  id?: number;
  handleOpenOptions: (isOpen: boolean) => void;
  handleCommitSuccess: (isSuccess: boolean) => void;
}

export interface HeaderBottomProps extends ClickQuestionInfoFnProps {
  isOpenOptions: boolean;
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
  id?: number;
  questionInfo?: {
    title: string;
    level: number;
    tags: Array<string>;
    platform: string;
    problemUrl: string;
  };
  codeblocks?: Array<{ id: number; code: string; memo: string }>;
  handlePostTempErr?: (message: string) => void;
  onClose?: () => void;
}
