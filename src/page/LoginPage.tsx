import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcLoginBig } from '../assets';
import LoginButton from '../components/Login/LoginButton';
import PageLayout from '../components/PageLayout/PageLayout';
import LandingPage from './LandingPage';

const LoginPage = () => {
  const { state } = useLocation();
  const { roomId, isLandingActive } = state || {};

  const navigate = useNavigate();
  const isAlreadyLogin =
    sessionStorage.getItem('user') ||
    sessionStorage.getItem('nickname') ||
    sessionStorage.getItem('token') ||
    sessionStorage.getItem('refresh') ||
    sessionStorage.getItem('profileImg');
  const isNotResgisted = sessionStorage.getItem('language') === '사용언어';
  const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;

  const githubURL = state
    ? `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo&state=${roomId}`
    : `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo`;
  const onClickSocialLogin = () => {
    window.location.href = githubURL;
  };

  return (
    <PageLayout
      category={isAlreadyLogin ? '홈' : 'login'}
      isDisabledFooter={true}
    >
      {isLandingActive ? (
        <LandingPage />
      ) : (
        <LoginContainer>
          <Title>성공적인 코딩테스트를 위한 최적의 경로</Title>
          <IcLoginBig />
          {!isAlreadyLogin || isNotResgisted ? (
            <LoginButton onClick={onClickSocialLogin} />
          ) : (
            <HomeBtn onClick={() => navigate('/')}>홈으로</HomeBtn>
          )}
        </LoginContainer>
      )}
    </PageLayout>
  );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  padding-top: 20.4rem;
`;

const Title = styled.h2`
  margin-bottom: 2.8rem;

  ${({ theme }) => theme.fonts.title_semiBold_18};
  color: ${({ theme }) => theme.colors.gray100};
`;

const HomeBtn = styled.button`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;

  padding: 1.55rem 2.4rem;
  margin-top: 5rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
  color: ${({ theme }) => theme.colors.gray900};
`;

export default LoginPage;
