import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ErrorModal from '../common/Modal/ErrorModal/ErrorModal';
import PageLayout from '../components/PageLayout/PageLayout';
import { postAuth } from '../libs/apis/Login/postAuth';

const LoginLoadingPage = () => {
  const navigate = useNavigate();

  const [modalOn, setModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');

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
            langauge,
            isExistUser,
          } = data.data;

          sessionStorage.setItem('user', userId);
          sessionStorage.setItem('nickname', nickname);
          sessionStorage.setItem('token', accessToken);
          sessionStorage.setItem('refresh', refreshToken);
          sessionStorage.setItem('profileImg', profileImg);
          sessionStorage.setItem('language', langauge);

          isExistUser ? navigate('/') : navigate('/register');
        })
        .catch((err) => {
          const errMsg = err.response.data.message;
          setErrMsg(errMsg);
          setModalOn(true);
        });
    }
  }, [window.location.search]);

  return (
    <PageLayout category="홈">
      {modalOn ? (
        <ErrorModal errMsg={errMsg} onClose={() => setModalOn(false)} />
      ) : (
        <Title>로그인 중...</Title>
      )}
    </PageLayout>
  );
};

const Title = styled.p`
  color: wheat;
  font-size: 100px;
`;

export default LoginLoadingPage;
