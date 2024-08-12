import { useState } from 'react';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';
import PageLayout from '../components/PageLayout/PageLayout';
import Github from '../components/Register/Gitbhub';
import IntroInput from '../components/Register/IntroInput';
import Language from '../components/Register/Language';
import NickName from '../components/Register/NickName';
import { handleInput } from '../utils/handleInput';

const RegisterPage = () => {
  const [inputs, setInputs] = useState({
    nickname: '',
    github: '',
    intro: '',
  });

  const [selectedLanguage, setSelectedLanguage] = useState('');

  const { nickname, github, intro } = inputs;

  // 입력 값 변경 처리 함수
  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 언어 태그 변경 처리 함수
  const handleChangeTag = (value: string) => {
    setSelectedLanguage(value);
  };

  // 소개글 변경 처리 함수
  const handleChangeIntro = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    handleInput(e, 'intro');
    setInputs((prev) => ({ ...prev, intro: value }));
  };

  // 가입 버튼 클릭 처리 함수
  const handleJoinBtnClick = () => {
    if (!isActive) return;
  };

  // 닉네임 중복 체크 함수 (구현 필요)
  const handleNicknameCheck = async () => {
    // 닉네임 중복 체크 로직 추가
  };

  const isActive =
    nickname.length > 0 &&
    nickname.length <= 10 &&
    intro.length > 0 &&
    intro.length <= 30 &&
    github.length > 0 &&
    selectedLanguage.length > 0;

  return (
    <PageLayout category={'login'}>
      <RegisterContainer onSubmit={handleJoinBtnClick}>
        <NickName
          nickname={nickname}
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