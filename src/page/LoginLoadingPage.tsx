import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorModal from '../common/Modal/ErrorModal/ErrorModal';
import PageLayout from '../components/PageLayout/PageLayout';
import { postAuth } from '../libs/apis/Login/postAuth';
import LoadingPage from './LoadingPage';

const LoginLoadingPage = () => {
  const navigate = useNavigate();

  const [modalOn, setModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code');
    const state = queryParams.get('state');

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
          sessionStorage.setItem('name', nickname);
          sessionStorage.setItem('token', accessToken);
          sessionStorage.setItem('refresh', refreshToken);
          sessionStorage.setItem('profileImg', profileImg);
          sessionStorage.setItem('language', langauge);

          if (state) {
            isExistUser
              ? navigate('/group-join', { state: { roomId: state } })
              : navigate('/register', { state: state });
          } else {
            isExistUser ? navigate('/') : navigate('/register');
          }
        })
        .catch((err) => {
          const errMsg = err.response.data.message;
          setErrMsg(errMsg);
          setModalOn(true);
        });
    }
  }, [window.location.search]);

  return (
    <>
      {modalOn ? (
        <PageLayout category="홈" isNotRequiredLogin={true}>
          <ErrorModal
            callbackPage="/"
            errMsg={errMsg}
            onClose={() => setModalOn(false)}
          />
        </PageLayout>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default LoginLoadingPage;
