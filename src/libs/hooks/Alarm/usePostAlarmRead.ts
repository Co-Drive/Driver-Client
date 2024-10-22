import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import postAlarmRead from '../../apis/Alarm/postAlarmRead';

const usePostAlarmRead = () => {
  const [errMsg, setErrMsg] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (notificationIds: number) =>
      await postAlarmRead(notificationIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-alarm-read'] });
      queryClient.invalidateQueries({ queryKey: ['get-alarm-list'] });
    },
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
  });

  return { mutation: mutation.mutate, readErr: errMsg };
};

export default usePostAlarmRead;
