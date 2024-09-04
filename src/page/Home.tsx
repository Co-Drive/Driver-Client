import styled from 'styled-components';
import CommonMonthSolve from '../common/CommonMonthSolve';
import HomeHeader from '../components/Home/HomeHeader';
import TodaySolve from '../components/Home/TodaySolve';
import WeeklyFollower from '../components/Home/WeekFollowing/WeeklyFollower';
import WeekRate from '../components/Home/WeekRate';
import PageLayout from '../components/PageLayout/PageLayout';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const token = sessionStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token]);
  
  return (
    <>
      <PageLayout category="홈">
        <HomeHeader />
        <MainContainer>
          <CommonMonthSolve />
          <TodaySolve />
        </MainContainer>
        <FooterContainer>
          <WeekRate />
          <WeeklyFollower />
        </FooterContainer>
      </PageLayout>
    </>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  gap: 2rem;

  margin-top: 2.2rem;
`;

const FooterContainer = styled.div`
  display: flex;
  gap: 1.8rem;

  margin-top: 2.4rem;
`;
