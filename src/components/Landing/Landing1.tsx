import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { LandingMoon } from '../../assets';
import PageLayout from '../PageLayout/PageLayout';

const Landing1 = () => {
  const navigate = useNavigate();

  return (
    <PageLayout category="홈">
      <LoginContainer>
        <TitleContainer>
          <Text>이번 코딩테스트는 합격하자!</Text>
          <Title>코딩테스트 100번 이상 본 개발자들이</Title>
          <Title>사용하려고 만든 서비스</Title>
        </TitleContainer>
        <HomeBtn onClick={() => navigate('/')}>지금 무료로 시작하기</HomeBtn>
        <img src={LandingMoon} alt="랜딩페이지"></img>
      </LoginContainer>
    </PageLayout>
  );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  margin: 0 auto;

  background-size: cover; /* 화면에 맞게 확대 */
  background-image: url('/src/assets/img/img_landing.png'); /* 이미지 경로 */
  background-repeat: no-repeat;
`;

const TitleContainer = styled.div`
  padding-top: 14.6rem;

  text-align: center;
`;

const Text = styled.p`
  margin-bottom: 1.8rem;

  ${({ theme }) => theme.fonts.landing_semibold_24};
  color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.landing_bold_48};
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

const HomeBtn = styled.button`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  position: relative;

  padding: 1.8rem 13.8rem;
  margin-top: 4.6rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_24};
  color: ${({ theme }) => theme.colors.gray900};

  box-shadow: rgb(183 255 199 / 70%) 0 0 1.5rem;
`;

export default Landing1;
