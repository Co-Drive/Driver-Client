import PageLayout from '../components/PageLayout/PageLayout';
import WeekRate from '../components/Week/WeekRate';

const Home = () => {
  return (
    <>
      <PageLayout category="홈">
        <WeekRate />
      </PageLayout>
    </>
  );
};

export default Home;
