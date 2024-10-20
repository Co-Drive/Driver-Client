import { api } from '../../api';

const deleteNotifications = async (connectSSE: () => void) => {
  try {
    await api
      .delete('/notifications')
      .then(() => setTimeout(() => connectSSE(), 500))
      .catch((err) => console.log(err));
  } catch (error) {
    // 추후 수정
    console.error('Error deleting notifications:', error);
  }
};

export default deleteNotifications;
