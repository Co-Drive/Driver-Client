import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { ImgLanding6Bg, ImgLanding7Bg, LandingSolveLevel } from '../../assets';
import Landing7 from './Landing7';

const Landing6 = () => {
  const { scrollY } = useScroll();
  const scrollAnimation = useAnimation();
  const windowScrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const documentHeight = document.body.scrollHeight;
  const scrollRatio = (windowScrollY + viewportHeight) / documentHeight;

  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', () => {
    if (scrollRatio > 0.593) {
      scrollAnimation.start({ opacity: 1 });
    } else {
      scrollAnimation.start({ opacity: 0 });
    }
  });

  useEffect(() => {
    const handleChangePages = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.body.scrollHeight;
      const scrollRatio = (scrollY + viewportHeight) / documentHeight;

      if (scrollRatio > 0.633) {
        setIsScrolled(true);
      } else if (scrollRatio < 0.593) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleChangePages);

    return () => {
      window.removeEventListener('scroll', handleChangePages);
    };
  }, []);

  return (
    <Landing6Container $isScrolled={isScrolled}>
      <LandingTop $isScrolled={isScrolled}>
        <Info>문제풀이</Info>
        <TitleContainer>
          <Title>자체 코드블록, 플랫폼 별 문제풀이 난이도 통합</Title>
          <Title>편리한 문제풀이 기록</Title>
        </TitleContainer>
        <Text>
          문제풀이 등록은 최대 10개까지 코드블록과 메모장을 자유롭게 사용할 수
          있어요.
        </Text>

        {isScrolled && (
          <motion.article initial={{ opacity: 0 }} animate={scrollAnimation}>
            <LandingImgContainer>
              <SolveImg src={LandingSolveLevel} alt="문제풀이 난이도" />
            </LandingImgContainer>
          </motion.article>
        )}
      </LandingTop>

      {isScrolled && (
        <motion.article initial={{ opacity: 0 }} animate={scrollAnimation}>
          <Landing7 />
        </motion.article>
      )}
    </Landing6Container>
  );
};

const Landing6Container = styled.article<{ $isScrolled: boolean }>`
  width: 100%;
  padding: ${({ $isScrolled }) =>
    $isScrolled ? `5.4rem 0 4.6rem` : `5.4rem 19.1rem 73.3rem`};

  background-position: center;
  background-size: cover;
  background-image: ${({ $isScrolled }) =>
    $isScrolled ? `url(${ImgLanding7Bg})` : `url(${ImgLanding6Bg})`};
  background-repeat: no-repeat;
`;

const LandingTop = styled.div<{ $isScrolled: boolean }>`
  ${({ $isScrolled }) =>
    $isScrolled &&
    css`
      margin-bottom: 3rem;
    `};
  padding-top: 5.4rem;

  text-align: center;
`;

const Info = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 11.2rem;
  height: 4.7rem;
  margin: 0 auto;

  border-radius: 2.5rem;
  background-color: rgb(255 255 255 / 10%);
  ${({ theme }) => theme.fonts.title_bold_16};
  color: ${({ theme }) => theme.colors.white};
`;

const TitleContainer = styled.div`
  margin: 2.8rem 0 3.6rem;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.landing_bold_34};
  color: ${({ theme }) => theme.colors.white};
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.landing_regular_20};
  color: ${({ theme }) => theme.colors.white};
`;

const LandingImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 40rem;
`;

const SolveImg = styled.img`
  width: 100%;
  margin-top: 6.6rem;
`;

export default Landing6;
