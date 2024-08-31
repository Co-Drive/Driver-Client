export interface WarningModalProps {
  onClose: () => void;
  handleClickContinueBtn: () => void;
  isGroupStatusModal: boolean;
  data: string;
}

export interface ErrorModalProps {
  errMsg: string;
  onClose: () => void;
}
