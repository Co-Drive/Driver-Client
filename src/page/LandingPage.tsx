import { useEffect, useRef, useState } from 'react';
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
  const pagesRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const scrollToLanding4 = () => {
    landing4Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const pagesElement = pagesRef.current;
    const count = pagesElement?.children.length || 0;

    const gotoNum = (index: number) => {
      setCurrent(index);
    };

    const gotoNext = () => current < count - 1 && gotoNum(current + 1);
    const gotoPrev = () => current > 0 && gotoNum(current - 1);

    const handleScroll = (e: WheelEvent) => {
      e.deltaY > 0 ? gotoNext() : gotoPrev();
    };

    pagesElement?.addEventListener('wheel', handleScroll);
    return () => pagesElement?.removeEventListener('wheel', handleScroll);
  }, [current]);

  return (
    <>
      <Landing1 />
      <Landing2 />
      <Landing3 scrollToLanding4={scrollToLanding4} />
      <Landing4 ref={landing4Ref} />
      <Landing5 />
      <Pages ref={pagesRef}>
        <Page style={{ bottom: `${(current - 0) * 100}%` }}>
          <Landing6 />
        </Page>
        <Page style={{ bottom: `${(current - 1) * 100}%` }}>
          <Landing7 />
        </Page>
      </Pages>
      <Landing8 />
      <Landing9 />
      <Landing10 />
      <Landing11 />
    </>
  );
};

export default LandingPage;

const Pages = styled.section`
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 100vh;
`;

const Page = styled.div`
  position: absolute;

  width: 100%;
  height: 100vh;

  background-position: center;
  background-size: cover;

  transition: bottom 1s ease; /* Adjusted transition duration */

  background-attachment: fixed;
  background-repeat: no-repeat;
`;
