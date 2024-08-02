import styled from 'styled-components';
import { IcLoginBig } from '../assets';
import LoginButton from '../components/Login/LoginButton';
import PageLayout from '../components/PageLayout/PageLayout';

const LoginPage = () => {
  const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
  const redirectUrl = import.meta.env.VITE_GITHUB_REDIRECT_URI;
  const githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;
  const onClickSocialLogin = () => {
    window.location.href = githubURL;
  };
  return (
    <PageLayout category={'login'}>
      <LoginContainer>
        <Title>성공적인 코딩테스트를 위한 최적의 경로</Title>
        <IcLoginBig />
        <LoginButton onClick={onClickSocialLogin} />
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

const Title = styled.h2`
  margin-bottom: 2.8rem;

  ${({ theme }) => theme.fonts.title_semiBold_18};
  color: ${({ theme }) => theme.colors.gray100};
`;

export default LoginPage;
