import { api } from '../../api';

const patchGoal = async (goal: number) => {
  const user = sessionStorage.getItem('user');
  const userId = user && parseInt(user);
  const { data } = await api.patch(`/users/${userId}/goal`, {
    goal: goal,
  });

  return data;
};

export default patchGoal;
