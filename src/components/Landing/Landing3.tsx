import styled from 'styled-components';
import { ArrowRightWhite, LandingCodriveImg } from '../../assets';

const Landing3 = ({ scrollToLanding4 }) => {
  return (
    <Landing3Container>
      <LandingTop>
        <Info>소개</Info>
        <TitleContainer>
          <Title>깃허브 리퍼지토리 자동 연동, 플랫폼 통합 문제풀이 기능,</Title>
          <Title>
            사용자 맞춤 대시보드 홈, 문제풀이 스터디 그룹, 네카라쿠배 등 빅테크
            합격자 족보까지
          </Title>
        </TitleContainer>
        <Text>
          오직 개발자만을 위해 만든 동기부여 서비스, 코드라이브에 지금
          합류해주세요!
        </Text>
      </LandingTop>
      <LandingImgContainer>
        <img src={LandingCodriveImg} alt="코드라이브" />
      </LandingImgContainer>
      <LandingButton onClick={scrollToLanding4}>
        <Button>자세히 알아보기</Button>
        <ArrowRightWhite />
      </LandingButton>
    </Landing3Container>
  );
};

const Landing3Container = styled.article`
  width: 100%;
  padding: 5.4rem 9.1rem 11.8rem 12.9rem;

  background-size: cover; /* 이미지가 확대되지 않고 전체에 맞도록 조정 */
  background-image: url('/src/assets/img/img_landing3_bg.png'); /* 이미지 경로 */
  background-repeat: no-repeat; /* 이미지 반복 안되도록 설정 */
`;

const LandingTop = styled.div`
  text-align: center;
`;

const Info = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 8.4rem;
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
  background: radial-gradient(
    circle farthest-corner at center center,
    #fff 0%,
    #58ff7d 100%
  );
  background-color: #ffff; /* background 뒤로 이동 */
  color: ${({ theme }) => theme.colors.gray100};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Text = styled.p`
  margin-bottom: 11.3rem;

  ${({ theme }) => theme.fonts.landing_regular_20};
  color: ${({ theme }) => theme.colors.white};
`;

const LandingButton = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  width: 20.5rem;
  padding: 1.65rem 2.8rem;
  margin: 0 auto;

  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 5rem;
`;

const Button = styled.button`
  ${({ theme }) => theme.fonts.title_bold_16};
  color: ${({ theme }) => theme.colors.white};
`;

const LandingImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Landing3;
