import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { deleteRecords } from '../../apis/Solution/deleteRecords';

const useDeleteRecords = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (recordId: number) => await deleteRecords(recordId),
    onError: () => navigate('/error'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-monthly-solution'] });
      navigate('/solution');
    },
  });

  return { mutation: mutation.mutate };
};

export default useDeleteRecords;
