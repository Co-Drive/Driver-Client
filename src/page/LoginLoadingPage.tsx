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
    console.log(code);

    if (code) {
      // 서버에 인가 코드 전송
      api
        .post('/auth/login', { code })
        .then((response) => {
          // 로그인 성공 시, 필요한 작업을 수행합니다.
          // 예를 들어, 사용자 정보를 저장하거나 토큰을 저장할 수 있습니다.
          console.log('로그인 성공:', response.data);
          navigate('/register'); // 로그인 성공 후 대시보드로 이동
        })
        .catch((error) => {
          // 로그인 실패 시 처리
          console.error('로그인 실패:', error);
          navigate('/error'); // 로그인 실패 시 로그인 페이지로 이동
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
`;

export default LoginLoadingPage;
