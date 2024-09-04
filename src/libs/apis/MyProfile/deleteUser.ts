import { api } from '../../api';

const deleteUser = async () => {
  const user = sessionStorage.getItem('user');
  const userId = user && parseInt(user);
  const { data } = await api.delete(`/users/${userId}/withdraw`);

  return data;
};

export default deleteUser;
