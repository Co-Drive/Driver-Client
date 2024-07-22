interface changeCodeFnProps {
  handleChangeCode: ({ newCode, stringId }: handleChangeCodeProps) => void;
}

interface clickQuestionInfoFnProps {
  handleClickQuestionInfo: (
    category: string,
    e:
      | React.MouseEvent<HTMLLIElement, MouseEvent>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export interface CodeEditorProps extends changeCodeFnProps {
  stringId: string;
  code: string;
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
    changeCodeFnProps {
  ideItems: Array<{ id: number; code: string; memo: string }>;
  handleClickDeleteBtn: (id: number) => void;
  handleChangeMemo: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface handleChangeCodeProps {
  newCode: string;
  stringId: string;
}
