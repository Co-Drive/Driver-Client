import { useMutation, useQueryClient } from '@tanstack/react-query';
import patchGoal from '../../apis/MyProfile/patchGoal';

const usePatchGoal = (saveGoal: () => void) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (goal: number) => await patchGoal(goal),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-goal'] });
      saveGoal();
    },
  });

  return { mutation: mutation.mutate };
};

export default usePatchGoal;
