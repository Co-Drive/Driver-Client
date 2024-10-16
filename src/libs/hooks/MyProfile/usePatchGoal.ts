import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import patchGoal from '../../apis/MyProfile/patchGoal';

const usePatchGoal = (saveGoal: () => void) => {
  const [errMsg, setErrMsg] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (goal: number) => await patchGoal(goal),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-goal'] });
      queryClient.invalidateQueries({ queryKey: ['get-user'] });
      saveGoal();
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
  });

  return { mutation: mutation.mutate, patchGoalErr: errMsg };
};

export default usePatchGoal;
