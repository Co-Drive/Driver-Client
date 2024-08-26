import PageLayout from '../components/PageLayout/PageLayout';
import MonthSolve from '../components/Week/MonthSolve';
import WeekRate from '../components/Week/WeekRate';
const Home = () => {
  return (
    <>
      <PageLayout category="홈">
        <MonthSolve />
        <WeekRate />
      </PageLayout>
    </>
  );
};

export default Home;
