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
  const language = sessionStorage.getItem('language');
  const isNotRegisted = language === '사용언어';

  const userId = parseInt(user!);

  useEffect(() => {
    if (!user || isNotRegisted) {
      !user ? navigate('/login') : navigate('/register');
    }
    return;
  });

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
