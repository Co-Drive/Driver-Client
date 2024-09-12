import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonMonthSolve from '../common/CommonMonthSolve';
import HomeHeader from '../components/Home/HomeHeader';
import TodaySolve from '../components/Home/TodaySolve';
import WeeklyFollower from '../components/Home/WeekFollowing/WeeklyFollower';
import WeekRate from '../components/Home/WeekRate';
import PageLayout from '../components/PageLayout/PageLayout';
const Home = () => {
  const navigate = useNavigate();
  const user = sessionStorage.getItem('user');
  if (!user) {
    useEffect(() => {
      navigate('/login');
    }, []);

    return;
  }

  const userId = parseInt(user);

  return (
    <PageLayout category="홈">
      <HomeHeader />
      <MainContainer>
        <CommonMonthSolve userId={userId} />
        <TodaySolve />
      </MainContainer>
      <FooterContainer>
        <WeekRate />
        <WeeklyFollower />
      </FooterContainer>
    </PageLayout>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  margin-top: 2.2rem;
`;

const FooterContainer = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;

  margin: 2.4rem 0 17rem;
`;
