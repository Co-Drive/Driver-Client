import styled from 'styled-components';
import { IcLandingLogo, ImgLanding9Bg, LandingRealImg2 } from '../../assets';

const Landing9 = () => {
  return (
    <Landing9Container>
      <TitleContainer>
        <IcLandingLogo />
        <Title>실제 사용 후기</Title>
      </TitleContainer>
      <LandingImgContainer>
        <LandingRealImg2 />
      </LandingImgContainer>
    </Landing9Container>
  );
};

const Landing9Container = styled.article`
  width: 100%;
  padding: 18.1rem 0 19.1rem;

  background-position: center;
  background-size: cover;
  background-image: url(${ImgLanding9Bg});
  background-repeat: no-repeat;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;

  margin-bottom: 12rem;

  text-align: center;
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.landing_bold_34};
  background: linear-gradient(to right, #fff 0%, #58ff7d 100%);
  background-color: #ffff; /* background 뒤로 이동 */
  color: ${({ theme }) => theme.colors.gray100};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const LandingImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 13.2rem;
`;

export default Landing9;
