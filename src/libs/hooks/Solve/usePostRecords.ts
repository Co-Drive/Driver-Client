import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { PostRecordsProps } from '../../../types/Solve/solveTypes';
import { postRecords } from '../../apis/Solve/postRecords';

const usePostRecords = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async ({ questionInfo, codeblocks }: PostRecordsProps) => {
      return await postRecords({ questionInfo, codeblocks });
    },
    onError: () => navigate('/error'),
    onSuccess: ({ data }) => {
      const { recordId } = data;
      navigate(`/solution/${recordId}`);
    },
  });
  return { postMutation: mutation.mutate, isLoading: mutation.isPending };
};

export default usePostRecords;
