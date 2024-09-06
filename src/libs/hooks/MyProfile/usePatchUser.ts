import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { PatchUserProps } from '../../../types/MyProfile/MyProfileType';
import patchUser from '../../apis/MyProfile/patchUser';

interface usePatchUserProps {
  nickname: string;
  handleCloseModal: () => void;
}

const usePatchUser = ({ nickname, handleCloseModal }: usePatchUserProps) => {
  const [errMsg, setErrMsg] = useState('');

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({
      nickname,
      githubUrl,
      comment,
      language,
    }: PatchUserProps) =>
      await patchUser({ nickname, githubUrl, comment, language }),
    onError: (err: { response: { data: { message: string } } }) => {
      const { message } = err.response.data;
      setErrMsg(message);
    },
    onSuccess: () => {
      const originNickname = sessionStorage.getItem('nickname');
      queryClient.invalidateQueries({ queryKey: ['get-user'] });
      queryClient.invalidateQueries({ queryKey: ['get-user-profile'] });
      if (originNickname !== nickname) {
        sessionStorage.setItem('nickname', nickname);
        window.location.reload();
      }
      handleCloseModal();
    },
  });

  return { patchMutation: mutation.mutate, patchUserErr: errMsg };
};

export default usePatchUser;
