import { api } from '../../api';

const getUser = async () => {
  const user = sessionStorage.getItem('user');
  const userId = user && parseInt(user);

  const { data } = await api.get(`/users/${userId}`);

  return data;
};

export default getUser;
