import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ImgLanding1Bg } from '../../assets';
import LoginButton from '../Login/LoginButton';
import PageLayout from '../PageLayout/PageLayout';

const Landing1 = () => {
  const { state } = useLocation();
  const { roomId } = state || {};

  const navigate = useNavigate();
  const isAlreadyLogin =
    sessionStorage.getItem('user') ||
    sessionStorage.getItem('nickname') ||
    sessionStorage.getItem('token') ||
    sessionStorage.getItem('refresh') ||
    sessionStorage.getItem('profileImg');
  const isNotResgisted = sessionStorage.getItem('language') === '사용언어';
  const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_GITHUB_REDIRECT_URI;
  const githubURL = state
    ? `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=repo&state=${roomId}`
    : `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=repo`;
  const onClickSocialLogin = () => {
    window.location.href = githubURL;
  };

  return (
    <PageLayout category="홈">
      <LoginContainer>
        <TitleContainer>
          <Text>이번 코딩테스트는 합격하자!</Text>
          <Title>성공적인 코딩테스트를 위한</Title>
          <Title>최적의 경로</Title>
        </TitleContainer>

        {!isAlreadyLogin || isNotResgisted ? (
          <LoginButton onClick={onClickSocialLogin} />
        ) : (
          <HomeBtn onClick={() => navigate('/')}>지금 무료로 시작하기</HomeBtn>
        )}
        <Img src={ImgLanding1Bg} alt="랜딩페이지"></Img>
      </LoginContainer>
    </PageLayout>
  );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding-top: 20.4rem;
  margin: 0 auto;
`;

const TitleContainer = styled.div`
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
  margin-top: 4.8rem;
  margin-bottom: 4.8rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  ${({ theme }) => theme.fonts.title_bold_24};
  color: ${({ theme }) => theme.colors.gray900};
`;

const Img = styled.img`
  margin-bottom: 18.6rem;
`;

export default Landing1;
