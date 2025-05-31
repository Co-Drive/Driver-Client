export interface WarningModalProps {
  onClose: () => void;
  handleClickContinueBtn: () => void;
  isGroupStatusModal: boolean;
  data: string;
}

export interface ErrorModalProps {
  callbackPage?: string;
  errMsg: string;
  onClose: () => void;
}

export interface HandleClickBgProps {
  e:
    | React.MouseEvent<HTMLDivElement, MouseEvent>
    | React.MouseEvent<HTMLElement, MouseEvent>;
  onClose: () => void;
}
