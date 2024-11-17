import styled from 'styled-components';
import { ImgLanding4Bg, LandingGithubInfoImg } from '../../assets';

const Landing4 = () => {
  return (
    <Landing4Container id="Landing4">
      <LandingTop>
        <Info>깃허브와의 연동</Info>
        <TitleContainer>
          <Title>3초만에 깃허브 계정으로 회원가입하고</Title>
          <Title>리퍼지토리에 자동 커밋</Title>
        </TitleContainer>
        <Text>
          어떤 플랫폼이든 내가 기록하고 싶은 내용 그대로 깃허브에 자동으로 올릴
          수 있어요.
        </Text>
      </LandingTop>
      <LandingImgContainer>
        <LandingImg
          src={LandingGithubInfoImg}
          alt="Landing Github Info Image"
        />
      </LandingImgContainer>
    </Landing4Container>
  );
};

const Landing4Container = styled.article`
  width: 100%;
  padding: 5.4rem 0 16rem;

  background-position: center;
  background-size: cover;
  background-image: url(${ImgLanding4Bg});
  background-repeat: no-repeat;
`;

const LandingTop = styled.div`
  padding-top: 5.4rem;

  text-align: center;
`;

const Info = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 15.7rem;
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
  margin-bottom: 4.9rem;

  ${({ theme }) => theme.fonts.landing_regular_20};
  color: ${({ theme }) => theme.colors.white};
`;

const LandingImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 14.7rem;
`;

const LandingImg = styled.img`
  width: 100%;
`;

export default Landing4;
