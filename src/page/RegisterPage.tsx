import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';
import PageLayout from '../components/PageLayout/PageLayout';
import IntroInput from '../components/Register/IntroInput';
import Language from '../components/Register/Language';
import NickName from '../components/Register/NickName';
import Repositories from '../components/Register/Repositories';
import { patchProfile } from '../libs/apis/Register/patchProfile';
import usePostCheckExitNickname from '../libs/hooks/MyProfile/usePostCheckExitNickname';
import usePostCheckExitRepository from '../libs/hooks/MyProfile/usePostCheckExitRepository';

const RegisterPage = () => {
  const [inputs, setInputs] = useState({
    nickname: '',
    github: '',
    intro: '',
    repositories: '',
  });

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [changeNickname, setChangeNickname] = useState({
    isExistNickname: false,
    isClickedCheckBtn: false,
  });

  const [changeRepositories, setChangeRepositories] = useState({
    isExistRepositories: false,
    isClickedCheckRepositoriesBtn: false,
  });

  const { isExistNickname, isClickedCheckBtn } = changeNickname;
  const { isExistRepositories, isClickedCheckRepositoriesBtn } =
    changeRepositories;

  const { state } = useLocation();

  const navigate = useNavigate();
  const id = sessionStorage.getItem('user');
  if (!id) {
    useEffect(() => {
      navigate('/login');
    }, []);

    return;
  }
  const userId = parseInt(id);

  const { nickname, intro, repositories } = inputs;
  const { mutation: nicknameMutation } = usePostCheckExitNickname(
    (isExit: boolean) =>
      setChangeNickname({
        isExistNickname: isExit,
        isClickedCheckBtn: true,
      })
  );

  const { mutation: repositoryMutation } = usePostCheckExitRepository(
    (isExit: boolean) =>
      setChangeRepositories({
        isExistRepositories: isExit,
        isClickedCheckRepositoriesBtn: true,
      })
  );

  const isActive =
    nickname.length > 0 &&
    nickname.length <= 10 &&
    isClickedCheckBtn &&
    isClickedCheckRepositoriesBtn &&
    !isExistNickname &&
    !isExistRepositories &&
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

    if (name === 'repositories') {
      setChangeRepositories((prev) => ({
        ...prev,
        isClickedCheckRepositoriesBtn: false,
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
    const name = sessionStorage.getItem('name'); // 세션에서 name 가져오기
    const profileInfo = {
      nickname: nickname,
      language: selectedLanguage,
      comment: intro,
      githubRepositoryName: repositories,
      githubUrl: name ? `https://github.com/${name}` : undefined,
    };

    try {
      const data = await patchProfile({ userId, profileInfo });

      if (data.code === 200) {
        sessionStorage.setItem('nickname', nickname);
        sessionStorage.setItem('language', selectedLanguage);
        state
          ? navigate('/group-join', { state: { roomId: state } })
          : navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 닉네임 중복 체크 함수
  const handleNicknameCheck = () => {
    nicknameMutation(nickname);
  };

  const handleRepositoriesCheck = () => {
    repositoryMutation(repositories);
  };

  return (
    <PageLayout category={'login'} isNotRequiredLogin={true}>
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
        <Repositories
          repositories={repositories}
          changeRepositories={changeRepositories}
          handleChangeInputs={handleChangeInputs}
          handleRepositoriesCheck={handleRepositoriesCheck}
        />
        <IntroInput value={intro} onChange={handleChangeIntro} />
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
  padding-bottom: 33.2rem;
  margin-top: 18.5rem;
`;

const RegisterButton = styled.div`
  display: flex;
  justify-content: center;
`;

export default RegisterPage;
