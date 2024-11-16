import { useRef } from 'react';
import styled from 'styled-components';
import Landing1 from '../components/Landing/Landing1';
import Landing10 from '../components/Landing/Landing10';
import Landing11 from '../components/Landing/Landing11';
import Landing2 from '../components/Landing/Landing2';
import Landing3 from '../components/Landing/Landing3';
import Landing4 from '../components/Landing/Landing4';
import Landing5 from '../components/Landing/Landing5';
import Landing6 from '../components/Landing/Landing6';
import Landing7 from '../components/Landing/Landing7';
import Landing8 from '../components/Landing/Landing8';
import Landing9 from '../components/Landing/Landing9';

const LandingPage = () => {
  const landing4Ref = useRef<HTMLDivElement>(null);

  const scrollToLanding4 = () => {
    landing4Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LandingContainer>
      <Landing1 />
      <Landing2 />
      <Landing3 scrollToLanding4={scrollToLanding4} />
      <Landing4 ref={landing4Ref} />
      <Landing5 />
      <Landing6 />
      <Landing7 />
      <Landing8 />
      <Landing9 />
      <Landing10 />
      <Landing11 />
    </LandingContainer>
  );
};

const LandingContainer = styled.div`
  display: flex;
  align-items: stretch; /* 각 컴포넌트를 화면 크기에 맞게 채웁니다. */
  flex-direction: column;
`;

export default LandingPage;
