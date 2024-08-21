import { useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import CommonButton from '../common/CommonButton';
import GithubInfo from '../components/Profile/GIthubInfo';
import IntroInfo from '../components/Profile/IntroInfo';
import LanguageInfo from '../components/Profile/LanguageInfo';
import NameInfo from '../components/Profile/NameInfo';
import { handleInput } from '../utils/handleInput';
import NicknameInfo from './../components/Profile/NicknameInfo';

const ProfilePage = () => {
  const [inputs, setInputs] = useState({
    nickname: '',
    github: '',
    intro: '',
  });

  const [selectedLanguage, setSelectedLanguage] = useState('');
  const navigate = useNavigate();

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
  const handleSaveBtnClick = () => {
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
    <ProfileContainer onSubmit={handleSaveBtnClick}>
      <NameInfo />
      <GithubInfo github={github} handleChangeInputs={handleChangeInputs} />
      <IntroInfo value={intro} onChange={handleChangeIntro} />
      <NicknameInfo
        nickname={nickname}
        handleChangeInputs={handleChangeInputs}
        handleNicknameCheck={handleNicknameCheck}
      />
      <LanguageInfo
        selectedTag={selectedLanguage}
        handleChangeTag={handleChangeTag}
      />
      <ProfileButton>
        <CommonButton
          isActive={isActive}
          category="Profile_save"
          onClick={() => handleSaveBtnClick()}
        />
        <CancelButton onClick={() => navigator(-1)}>취소하기</CancelButton>
      </ProfileButton>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div``;

const ProfileButton = styled.button``;

const CancelButton = styled.button`
  padding: 1rem 2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

export default ProfilePage;
