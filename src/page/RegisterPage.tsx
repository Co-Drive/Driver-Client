import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';
import PageLayout from '../components/PageLayout/PageLayout';
import Github from '../components/Register/Gitbhub';
import IntroInput from '../components/Register/IntroInput';
import Language from '../components/Register/Language';
import NickName from '../components/Register/NickName';
import { patchProfile } from '../libs/apis/Register/patchProfile';
import usePostCheckExitNickname from '../libs/hooks/MyProfile/usePostCheckExitNickname';

const RegisterPage = () => {
  const [inputs, setInputs] = useState({
    nickname: '',
    github: '',
    intro: '',
  });

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [changeNickname, setChangeNickname] = useState({
    isExistNickname: false,
    isClickedCheckBtn: false,
  });

  const { isExistNickname, isClickedCheckBtn } = changeNickname;

  const navigate = useNavigate();
  const id = sessionStorage.getItem('user');
  if (!id) {
    useEffect(() => {
      navigate('/login');
    }, []);

    return;
  }
  const userId = parseInt(id);

  const { nickname, github, intro } = inputs;
  const { mutation } = usePostCheckExitNickname((isExit: boolean) =>
    setChangeNickname({
      isExistNickname: isExit,
      isClickedCheckBtn: true,
    })
  );

  const isActive =
    nickname.length > 0 &&
    nickname.length <= 10 &&
    isClickedCheckBtn &&
    !isExistNickname &&
    selectedLanguage.length > 0;

  // 입력 값 변경 처리 함수
  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'nickname') {
      setChangeNickname((prev) => ({
        ...prev,
        isClickedCheckBtn: false,
      }));
    }
  };

  // 언어 태그 변경 처리 함수
  const handleChangeTag = (value: string) => {
    setSelectedLanguage(value);
  };

  // 소개글 변경 처리 함수
  const handleChangeIntro = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInputs((prev) => ({ ...prev, intro: value }));
  };

  // 가입 버튼 클릭 처리 함수
  const handleJoinBtnClick = async () => {
    if (!isActive) return;

    const profileInfo = {
      nickname: nickname,
      language: selectedLanguage,
      comment: intro,
      githubUrl: github,
    };

    try {
      const data = await patchProfile({ userId, profileInfo });

      if (data.code === 200) {
        sessionStorage.setItem('nickname', nickname);
        sessionStorage.setItem('language', selectedLanguage);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 닉네임 중복 체크 함수
  const handleNicknameCheck = () => {
    mutation(nickname);
  };

  return (
    <PageLayout category={'login'}>
      <RegisterContainer onSubmit={handleJoinBtnClick}>
        <NickName
          nickname={nickname}
          changeNickname={changeNickname}
          handleChangeInputs={handleChangeInputs}
          handleNicknameCheck={handleNicknameCheck}
        />
        <Language
          selectedTag={selectedLanguage}
          handleChangeTag={handleChangeTag}
        />
        <IntroInput value={intro} onChange={handleChangeIntro} />
        <Github github={github} handleChangeInputs={handleChangeInputs} />
        <RegisterButton>
          <CommonButton
            isActive={isActive}
            category="account_create"
            onClick={() => handleJoinBtnClick()}
          />
        </RegisterButton>
      </RegisterContainer>
    </PageLayout>
  );
};

const RegisterContainer = styled.form`
  padding-bottom: 15.4rem;
  margin-top: 7rem;
`;

const RegisterButton = styled.div`
  display: flex;
  justify-content: center;
`;

export default RegisterPage;
