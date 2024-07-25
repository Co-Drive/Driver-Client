export interface handleChangeCodeProps {
  newCode: string;
  stringId: string;
}

interface changeCodeFnProps {
  handleChangeCode: ({ newCode, stringId }: handleChangeCodeProps) => void;
}

interface changeMemoFnProps {
  handleChangeMemo: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface handleClickQuestionInfoProps {
  category: string;
  e:
    | React.MouseEvent<HTMLLIElement, MouseEvent>
    | React.ChangeEvent<HTMLInputElement>;
}

interface clickQuestionInfoFnProps {
  handleClickQuestionInfo: ({
    category,
    e,
  }: handleClickQuestionInfoProps) => void;
}

export interface CodeEditorProps extends changeCodeFnProps {
  stringId: string;
  code: string;
}

export interface MemoProps extends changeMemoFnProps {
  stringId: string;
  memo: string;
}

export interface HeaderTopProps extends clickQuestionInfoFnProps {
  title: string;
}

export interface CodeSpaceHeaderProps extends clickQuestionInfoFnProps {
  questionInfo: {
    title: string;
    type: Array<String>;
    platform: string;
    link: string;
  };
}

export interface CodeSpaceProps
  extends CodeSpaceHeaderProps,
    changeCodeFnProps,
    changeMemoFnProps {
  ideItems: Array<{ id: number; code: string; memo: string }>;
  handleClickDeleteBtn: (id: number) => void;
}
