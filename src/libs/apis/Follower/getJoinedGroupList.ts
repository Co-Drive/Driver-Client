import { api } from '../../api';

const getJoinedGroupList = async () => {
  const userId = sessionStorage.getItem('user');
  const { data } = await api.get(`/rooms/${userId}/member/title`);

  return data;
};

export default getJoinedGroupList;
