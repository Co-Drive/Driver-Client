import styled from 'styled-components';
import FollowingList from '../components/MyProfile/FollowingList';
import MyGoal from '../components/MyProfile/MyGoal';
import Profile from '../components/MyProfile/Profile';
import PageLayout from '../components/PageLayout/PageLayout';

const MyProfilePage = () => {
  return (
    <PageLayout category={'홈'}>
      <MyProfileContainer>
        <Profile />
        <MyGoal />
        <FollowingList />
      </MyProfileContainer>
    </PageLayout>
  );
};

const MyProfileContainer = styled.div`
  padding: 6.4rem 0;
`;

export default MyProfilePage;
