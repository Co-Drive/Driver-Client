import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ErrorModal from '../common/Modal/ErrorModal/ErrorModal';
import FollowingList from '../components/MyProfile/FollowingList';
import MyGoal from '../components/MyProfile/MyGoal';
import Profile from '../components/MyProfile/Profile';
import PageLayout from '../components/PageLayout/PageLayout';

const MyProfilePage = () => {
  const accessUrl = useParams();
  const { id } = accessUrl;
  const username = sessionStorage.getItem('name');

  const [errModalOn, setErrModalOn] = useState(false);

  useEffect(() => {
    if (id !== username) {
      setErrModalOn(true);
    }
  }, [id]);
  return (
    <PageLayout category={'홈'}>
      {errModalOn ? (
        <ErrorModal
          errMsg="유효하지 않은 주소입니다."
          onClose={() => setErrModalOn(false)}
          callbackPage="/"
        />
      ) : (
        <MyProfileContainer>
          <Profile />
          <MyGoal />
          <FollowingList />
        </MyProfileContainer>
      )}
    </PageLayout>
  );
};

const MyProfileContainer = styled.div`
  padding: 6.4rem 0 33.2rem;
`;

export default MyProfilePage;
