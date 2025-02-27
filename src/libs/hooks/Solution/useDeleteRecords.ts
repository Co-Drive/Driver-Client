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
      const year = new Date().getFullYear();
      const month = new Date().getMonth() + 1;

      queryClient.invalidateQueries({ queryKey: ['get-monthly-solution'] });
      navigate(`/solution?page=1&year=${year}&month=${month}`);
    },
  });

  return { mutation: mutation.mutate, deleteErr: errMsg };
};

export default useDeleteRecords;
