import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postGroupInfo } from '../../apis/GroupCreate/postGroupInfo';

const usePostGroup = (previewImage?: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (requestBody: FormData) => postGroupInfo(requestBody),
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ['get-participated-rooms'] });
      queryClient.invalidateQueries({ queryKey: [['get-recent-rooms']] });

      const { uuid } = res.data;
      if (uuid) {
        navigate(`/group-complete/${uuid}`);
      } else {
        navigate('/group-complete', {
          state: {
            thumbnailUrl: previewImage,
          },
        });
      }
    },
  });

  return { mutation: mutation.mutate, isLoading: mutation.isPending };
};

export default usePostGroup;
