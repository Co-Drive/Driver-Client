import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import postAlarmRead from '../../apis/Alarm/postAlarmRead';

import { useNavigate } from 'react-router-dom';

const usePostAlarmRead = () => {
  const [errMsg, setErrMsg] = useState('');
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({
      notificationId,
      type,
      dataId,
    }: {
      notificationId: number;
      type: string;
      dataId: number;
    }) => {
      await postAlarmRead(notificationId);
      return { type, dataId };
    },
    onSuccess: ({ type, dataId }: { type: string; dataId: number }) => {
      switch (type) {
        case 'FOLLOW':
          navigate(`/follower/${dataId}`);
          break;
        case 'CREATED_PUBLIC_ROOM_REQUEST':
          navigate(`/group/${dataId}/admin`);
          break;
        case 'CREATED_PRIVATE_ROOM_JOIN':
          navigate(`/group/${dataId}/admin`);
          break;
        case 'PUBLIC_ROOM_REQUEST':
          navigate(`/group/${dataId}`, {
            state: { disabledApply: true },
          }); // state 를 true로 변경하여 신청하기 버튼 없애기
          break;
        case 'PUBLIC_ROOM_APPROVE':
          navigate(`/group/${dataId}/member`);
          break;
        case 'ROOM_STATUS_INACTIVE':
          navigate('/group/my-page');
          break;
      }
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
