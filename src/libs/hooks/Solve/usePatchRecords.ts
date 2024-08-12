import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { PatchRecordsProps } from '../../../types/Solve/solveTypes';
import { patchRecords } from '../../apis/Solve/patchRecords';

const usePatchRecords = (id?: number) => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: async ({ id, questionInfo, codeblocks }: PatchRecordsProps) => {
      return await patchRecords({ id, questionInfo, codeblocks });
    },
    onError: () => navigate('/error'),
    onSuccess: () => navigate(`/solution/${id}`),
  });
  return { patchMutation: mutation.mutate, isLoading: mutation.isPending };
};

export default usePatchRecords;
