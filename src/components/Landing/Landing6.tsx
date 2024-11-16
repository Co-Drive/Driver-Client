import { useState } from 'react';
import styled, { css } from 'styled-components';
import { ImgLanding6Bg, ImgLanding7Bg, LandingSolveLevel } from '../../assets';
import Landing7 from './Landing7';

const Landing6 = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <Landing6Container
      id="landing6"
      $isScrolled={isScrolled}
      onClick={() => setIsScrolled(!isScrolled)}
    >
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
          <LandingImgContainer>
          <SolveImg src={LandingSolveLevel} alt="문제풀이 난이도" />
        </LandingImgContainer>
        )}
      </LandingTop>

      {isScrolled && <Landing7 />}
    </Landing6Container>
  );
};

const Landing6Container = styled.article<{ $isScrolled: boolean }>`
  width: 100%;
  min-height: 100vh;

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
