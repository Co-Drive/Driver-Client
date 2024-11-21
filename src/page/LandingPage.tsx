import Landing1 from '../components/Landing/Landing1';
import Landing10 from '../components/Landing/Landing10';
import Landing11 from '../components/Landing/Landing11';
import Landing2 from '../components/Landing/Landing2';
import Landing3 from '../components/Landing/Landing3';
import Landing4 from '../components/Landing/Landing4';
import Landing5 from '../components/Landing/Landing5';
import Landing6 from '../components/Landing/Landing6';
import Landing8 from '../components/Landing/Landing8';
import Landing9 from '../components/Landing/Landing9';
import PageLayout from '../components/PageLayout/PageLayout';

const LandingPage = () => {
  const scrollToLanding4 = () => {
    const landing4Top = document.getElementById('Landing4')?.offsetTop;

    if (landing4Top) {
      const scrollToLanding4 = landing4Top - 100;

      scrollTo({ top: scrollToLanding4, behavior: 'smooth' });
    }
  };

  return (
    <PageLayout category="랜딩페이지">
      <Landing1 />
      <Landing2 />
      <Landing3 scrollToLanding4={scrollToLanding4} />
      <Landing4 />
      <Landing5 />
      <Landing6 />
      <Landing8 />
      <Landing9 />
      <Landing10 />
      <Landing11 />
    </PageLayout>
  );
};

export default LandingPage;
