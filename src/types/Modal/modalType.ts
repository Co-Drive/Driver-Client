export interface WarningModalProps {
  onClose: () => void;
  handleClickContinueBtn: (userId: number) => void | (() => void);
  isGroupStatusModal: boolean;
  data: string;
}

export interface ErrorModalProps {
  errMsg: string;
  onClose: () => void;
}
