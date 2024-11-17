import styled from 'styled-components';
import { ImgLanding5Bg, LandingHomeImg } from '../../assets';

const Landing5 = () => {
  return (
    <Landing5Container>
      <LandingTop>
        <Info>홈 화면 대시보드</Info>
        <TitleContainer>
          <Title>하루 목표부터 월간 보드까지</Title>
          <Title>코딩테스트 준비부터 합격까지 동기부여 되게끔</Title>
        </TitleContainer>
        <Text>
          다양한 형태의 그래프를 통해 나의 문제풀이 현황을 한 눈에 볼 수 있어요
        </Text>
      </LandingTop>
      <LandingImgContainer>
        <LandingImg src={LandingHomeImg} alt="홈 이미지" />
      </LandingImgContainer>
    </Landing5Container>
  );
};

const Landing5Container = styled.article`
  width: 100%;
  padding: 5.4rem 0 9.255rem;

  background-position: center;
  background-size: cover;
  background-image: url(${ImgLanding5Bg});
  background-repeat: no-repeat;
`;

const LandingTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
`;

const Info = styled.p`
  padding: 1.4rem 2.8rem;

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
  margin-bottom: 7.1rem;

  ${({ theme }) => theme.fonts.landing_regular_20};
  color: ${({ theme }) => theme.colors.white};
`;

const LandingImgContainer = styled.div`
  margin: 0 18.5rem 0 36.5rem;

  text-align: center;
`;

const LandingImg = styled.img`
  width: 100%;
`;

export default Landing5;
