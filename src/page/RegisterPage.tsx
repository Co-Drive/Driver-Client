import { useState } from 'react';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';
import PageLayout from '../components/PageLayout/PageLayout';
import Github from '../components/Register/Gitbhub';
import IntroInput from '../components/Register/IntroInput';
import Language from '../components/Register/Language';
import NickName from '../components/Register/NickName';
import { postNickname } from '../libs/apis/Register/postNickname';

const RegisterPage = () => {
  const [inputs, setInputs] = useState({
    nickname: '',
    github: '',
    intro: '',
  });

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isExitedNickname, setIsExitedNickname] = useState(false); // 닉네임 중복 상태 추가

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
  const handleJoinBtnClick = () => {
    if (!isActive) return;
    // 가입 로직 추가
  };

  // 닉네임 중복 체크 함수
  const handleNicknameCheck = async () => {
    try {
      // `postNickname` 함수 호출
      const data = await postNickname(nickname);

      // 응답 데이터 출력
      console.log('서버 응답 데이터:', data);

      // 응답 데이터에서 code 확인
      if (data.code === 200) {
        // 닉네임 사용 가능
        alert('사용 가능한 닉네임입니다.');
      }
    } catch (error: any) {
      // 오류 응답 전체 출력
      console.log('서버 응답 오류:', error);

      // 오류 응답에서 데이터 부분 확인
      const errorData = error.response?.data || error; // `error.response?.data`가 undefined일 경우 직접 `error` 사용
      console.log('오류 응답 데이터:', errorData);

      const errorCode = errorData?.code;

      if (errorCode === 409) {
        setIsExitedNickname(true);
        // 닉네임 사용 불가
      } else if (errorCode === 400) {
        // 잘못된 요청
        alert('잘못된 요청입니다. 닉네임 형식을 확인해주세요.');
      } else {
        // 그 외의 오류
        alert('서버 오류가 발생했습니다. 다시 시도해주세요.');
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
