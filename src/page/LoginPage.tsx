import styled from 'styled-components';
import { IcLoginLogo } from '../assets';
import LoginButton from '../components/Login/LoginButton';

const LoginPage = () => {
  const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_GITHUB_REDIRECT_URI;
  const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;
  const onClickSocialLogin = () => {
    window.location.href = githubURL;
  };
  return (
    <LoginContainer>
      <Title>성공적인 코딩테스트를 위한 최적의 경로</Title>
      <IcLoginLogo />
      <LoginButton onClick={onClickSocialLogin} />
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 420px;
  height: 100%;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin-bottom: 2.8rem;

  ${({ theme }) => theme.fonts.title_semiBold_18};
  color: ${({ theme }) => theme.colors.gray100};
`;

export default LoginPage;
