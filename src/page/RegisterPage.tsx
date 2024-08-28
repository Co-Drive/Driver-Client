import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';
import PageLayout from '../components/PageLayout/PageLayout';
import Github from '../components/Register/Gitbhub';
import IntroInput from '../components/Register/IntroInput';
import Language from '../components/Register/Language';
import NickName from '../components/Register/NickName';
import { patchProfile } from '../libs/apis/Register/patchProfile';
import { postNickname } from '../libs/apis/Register/postNickname';

const RegisterPage = () => {
  const [inputs, setInputs] = useState({
    nickname: '',
    github: '',
    intro: '',
  });

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isExitedNickname, setIsExitedNickname] = useState(false); // 닉네임 중복 상태 추가

  const navigate = useNavigate(); // 페이지 이동을 위해 useNavigate 훅 사용

  const { nickname, github, intro } = inputs;

  // 입력 값 변경 처리 함수
  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'nickname') {
      // 닉네임 변경 시 중복 상태 초기화
      setIsExitedNickname(false);
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

    // 서버에 보낼 프로필 정보 준비
    const profileInfo = {
      nickname: nickname,
      language: selectedLanguage,
      comment: intro,
      githubUrl: github,
    };

    try {
      // 예시 userId (이 부분은 실제 데이터에 맞게 수정되어야 함)
      const userId = 5; // TODO: 실제 userId를 설정해야 합니다.

      // PATCH 요청을 보냄
      const response = await patchProfile({ userId, profileInfo });

      // 요청 후 응답 데이터 로그 출력
      console.log('Server response:', response);

      // 응답이 성공적일 경우
      if (response) {
        navigate('/');
      }
    } catch (error: any) {
      // 에러 발생 시 로그 출력
      console.error('Error while updating profile:', error);

      // 에러 처리
      const errorData = error.response?.data || error;
      const errorCode = errorData?.code;

      if (errorCode === 400) {
        alert('잘못된 요청입니다. 입력한 정보를 다시 확인해주세요.');
      } else if (errorCode === 404) {
        alert('사용자를 찾을 수 없습니다. 다시 시도해주세요.');
      } else {
        alert('알 수 없는 오류가 발생했습니다. 나중에 다시 시도해주세요.');
      }
    }
  };

  // 닉네임 중복 체크 함수
  const handleNicknameCheck = async () => {
    try {
      const data = await postNickname(nickname);
      if (data.code === 200) {
        setIsExitedNickname(false);
      }
    } catch (error: any) {
      const errorData = error.response?.data || error;
      const errorCode = errorData?.code;

      if (errorCode === 409) {
        setIsExitedNickname(true);
        setIsExitedNickname(false);
      }
    }
  };

  const isActive =
    nickname.length > 0 &&
    nickname.length <= 10 &&
    intro.length > 0 &&
    intro.length <= 30 &&
    github.length > 0 &&
    selectedLanguage.length > 0 &&
    !isExitedNickname; // 닉네임 중복 상태 추가

  return (
    <PageLayout category={'login'}>
      <RegisterContainer onSubmit={handleJoinBtnClick}>
        <NickName
          nickname={nickname}
          isExitedNickname={isExitedNickname} // 닉네임 중복 상태 전달
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
