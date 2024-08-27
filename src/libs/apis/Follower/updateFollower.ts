import { UpdateFollowerProps } from '../../../types/Follower/Personal/personalType';
import { api } from '../../api';

const updateFollower = async ({ isDelete, nickname }: UpdateFollowerProps) => {
  const { data } = isDelete
    ? await api.delete(`/follow/${nickname}`)
    : await api.post(`/follow/${nickname}`);

  return data;
};

export default updateFollower;
