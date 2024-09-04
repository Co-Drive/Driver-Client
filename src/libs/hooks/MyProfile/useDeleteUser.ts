import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import deleteUser from '../../apis/MyProfile/deleteUser';

const useDeleteUser = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async () => await deleteUser(),
    onSuccess: () => {
      navigate('/login');
      sessionStorage.clear();
    },
  });

  return { deleteMutation: mutation.mutate };
};

export default useDeleteUser;
