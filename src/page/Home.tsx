import HomeHeader from '../components/Home/HomeHeader';
import MonthSolve from '../components/Home/MonthSolve';
import TodaySolve from '../components/Home/TodaySolve';
import WeeklyFollower from '../components/Home/WeekFollowing/WeeklyFollower';
import WeekRate from '../components/Home/WeekRate';
import PageLayout from '../components/PageLayout/PageLayout';
const Home = () => {
  return (
    <>
      <PageLayout category="홈">
        <HomeHeader />
        <MonthSolve />
        <TodaySolve />
        <WeekRate />
        <WeeklyFollower />
      </PageLayout>
    </>
  );
};

export default Home;
