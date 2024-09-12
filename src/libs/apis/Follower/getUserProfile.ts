import { api } from '../../api';

const getUserProfile = async (userId?: number) => {
  const { data } = await api.get(`/users/${userId}/profile`);

  return data;
};

export default getUserProfile;
