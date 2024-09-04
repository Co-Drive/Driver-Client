import { api } from '../../api';

const getUserAchieve = async () => {
  const { data } = await api.get(`/users/achieve`);

  return data;
};

export default getUserAchieve;
