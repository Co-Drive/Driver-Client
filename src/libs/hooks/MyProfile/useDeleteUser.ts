import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import deleteUser from '../../apis/MyProfile/deleteUser';

const useDeleteUser = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');

  const mutation = useMutation({
    mutationFn: async () => await deleteUser(),
    onSuccess: () => {
      navigate('/login');
      sessionStorage.clear();
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
  });

  return { deleteMutation: mutation.mutate, deleteUserErr: errMsg };
};

export default useDeleteUser;
