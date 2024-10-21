export interface AlarmModalProps {
  isOpen: boolean;
  handleClose: () => void;
  notifications: [
    {
      content: string;
      isRead: boolean;
    },
  ];
}
