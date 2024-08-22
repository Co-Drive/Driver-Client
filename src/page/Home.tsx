import HomeHeader from '../components/Home/HomeHeader';
import TodaySolve from '../components/Home/TodaySolve';
import PageLayout from '../components/PageLayout/PageLayout';

const Home = () => {
  return (
    <PageLayout category={'홈'}>
      <HomeHeader />
      <TodaySolve />
    </PageLayout>
  );
};

export default Home;
