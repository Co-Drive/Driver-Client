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
        .then(({ data }) => {
          const {
            userId,
            nickname,
            accessToken,
            refreshToken,
            profileImg,
            isExistUser,
          } = data.data;
          sessionStorage.setItem('user', userId);
          sessionStorage.setItem('nickname', nickname);
          sessionStorage.setItem('token', accessToken);
          sessionStorage.setItem('refresh', refreshToken);
          sessionStorage.setItem('profileImg', profileImg);

          isExistUser ? navigate('/') : navigate('/register');
        })
        .catch((err) => {
          // 이거 지우고 에러 모달 띄우기
          console.log(err);
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
