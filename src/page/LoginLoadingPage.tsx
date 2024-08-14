import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout/PageLayout';
import { postAuth } from '../libs/apis/Login/postAuth';

const LoginLoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code');

    if (code) {
      postAuth(code)
        .then((response) => {
          navigate('/register');
        })
        .catch((error) => {
          /* navigate('/error'); */
        });
    }
  }, [window.location.search]);

  return (
    <PageLayout category="홈">
      <Title>로그인 중...</Title>
    </PageLayout>
  );
};

const Title = styled.p`
  color: wheat;
  font-size: 100px;
`;

export default LoginLoadingPage;
