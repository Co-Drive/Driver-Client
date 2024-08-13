import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout/PageLayout';
import { api } from '../libs/api';

const LoginLoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code');

    if (code) {
      api
        .post('/auth/login', { code })
        .then((response) => {
          console.log('로그인 성공:', response.data);
          navigate('/register');
        })
        .catch((error) => {
          console.error('로그인 실패:', error);
          navigate('/error');
        });
    }
  }, [navigate]);

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
