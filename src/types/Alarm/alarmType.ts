export interface AlarmModalProps {
  isOpen: boolean;
  handleClose: () => void;
  notifications: [
    {
      content: string;
      isRead: boolean;
      notificationId: number;
      type: string;
      dataId: number;
    },
  ];
}
