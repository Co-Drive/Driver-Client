import CommonCalendar from '../components/Calendar/Calendar';
import PageLayout from '../components/PageLayout/PageLayout';

const Home = () => {
  return (
    <>
      <PageLayout category="홈">
        <CommonCalendar />
      </PageLayout>
    </>
  );
};

export default Home;
