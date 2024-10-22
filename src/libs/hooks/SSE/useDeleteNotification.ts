import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import deleteNotification from '../../apis/SSE/deleteNotification';

const useDeleteNotification = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async () => await deleteNotification(),
    onSuccess: () => {
      sessionStorage.clear();
      navigate('/');
    },
    onError: (err) => console.log(err),
  });

  return { deleteNotification: mutation.mutate };
};

export default useDeleteNotification;
