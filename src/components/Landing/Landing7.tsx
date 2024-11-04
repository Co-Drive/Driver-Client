import styled from 'styled-components';
import {
  LandingLogo1,
  LandingLogo2,
  LandingLogo3,
  LandingLogo4,
  LandingLogo5,
  LandingSolveLevel,
} from '../../assets';

const images = [
  LandingLogo1,
  LandingLogo2,
  LandingLogo3,
  LandingLogo4,
  LandingLogo5,
];

const Landing7 = () => {
  return (
    <Landing7Container>
      <LandingTop>
        <Info>문제풀이</Info>
        <TitleContainer>
          <Title>자체 코드블록, 플랫폼 별 문제풀이 난이도 통합</Title>
          <Title>임시저장 기능으로 언제든 다시 풀 수 있게</Title>
        </TitleContainer>
        <Text>
          백준, 프로그래머스, SWEA, 리트코드, 해커랭크 총 6개 플랫폼의 난이도를
          하나의 가이드로 정리하여 볼 수 있어요.
        </Text>
        <SolveImg src={LandingSolveLevel} alt="문제풀이 난이도" />
      </LandingTop>
      <LandingBottom>
        <BottomText>
          코드라이브에 가입하시면 바로 확인하실 수 있습니다!
        </BottomText>
        <SliderContainer>
          <LogoList>
            {[...images, ...images, ...images].map((src, index) => (
              <List key={index}>
                <img src={src} alt={`이미지 ${index + 1}`} />
              </List>
            ))}
          </LogoList>
        </SliderContainer>
      </LandingBottom>
    </Landing7Container>
  );
};
const Landing7Container = styled.article`
  width: 100%;
  padding: 5.4rem 0 4.6rem;

  background-size: cover; /* 이미지가 확대되지 않고 전체에 맞도록 조정 */
  background-image: url('/src/assets/img/img_landing7_bg.png'); /* 이미지 경로 */
  background-repeat: no-repeat; /* 이미지 반복 안되도록 설정 */
`;

const LandingTop = styled.div`
  margin-bottom: 4.9rem;

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
  background-color: ${({ theme }) => theme.colors.gray500};
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

const SolveImg = styled.img`
  margin-top: 6.6rem;
`;

const LandingBottom = styled.div`
  text-align: center;
`;

const BottomText = styled.p`
  margin-bottom: 6.3rem;

  ${({ theme }) => theme.fonts.title_regular_14};
  color: ${({ theme }) => theme.colors.gray200};
`;

const SliderContainer = styled.div`
  align-items: center;
  position: relative;
  overflow: hidden;

  width: 100%;
`;

const LogoList = styled.div`
  display: flex;
  gap: 3rem;
  animation: scroll 50s linear infinite;

  width: calc(28rem * ${images.length * 3} + 3rem * ${images.length * 3 - 1});

  @keyframes scroll {
    0% {
      transform: translateX(-33.333%);
    }

    100% {
      transform: translateX(0%);
    }
  }
`;

const List = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Landing7;
