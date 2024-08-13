import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postTempRecords } from '../../apis/Solve/postTempRecords';
import { PostRecordsProps } from './../../../types/Solve/solveTypes';

const usePostTempRecords = (onClose?: () => void) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ questionInfo, codeblocks }: PostRecordsProps) => {
      return await postTempRecords({ questionInfo, codeblocks });
    },
    onError: () => navigate('/error'),
    onSuccess: ({ data }) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ['/get-temp-records'] });
        navigate('/solution');
        onClose && onClose();
      }
    },
  });

  return { mutation: mutation.mutate };
};

export default usePostTempRecords;
