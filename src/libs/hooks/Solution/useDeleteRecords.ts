import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteRecords } from '../../apis/Solution/deleteRecords';

const useDeleteRecords = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (recordId: number) => await deleteRecords(recordId),
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-monthly-solution'] });
      navigate('/solution');
    },
  });

  return { mutation: mutation.mutate, deleteErr: errMsg };
};

export default useDeleteRecords;
