import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postTempRecords } from '../../apis/Solve/postTempRecords';
import { PostRecordsProps } from './../../../types/Solve/solveTypes';

const usePostTempRecords = (onClose?: () => void) => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async ({ questionInfo, codeblocks }: PostRecordsProps) => {
      return await postTempRecords({ questionInfo, codeblocks });
    },
    onError: () => navigate('/error'),
    onSuccess: ({ data }) => {
      if (data) {
        navigate('/solution');
        onClose && onClose();
      }
    },
  });

  return { mutation: mutation.mutate };
};

export default usePostTempRecords;
