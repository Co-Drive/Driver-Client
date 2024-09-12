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
