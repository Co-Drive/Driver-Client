import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CommonButton from '../common/CommonButton';
import PageLayout from '../components/PageLayout/PageLayout';
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

  const user = '김문주';

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
    navigate('/register');
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
    <PageLayout category="홈">
      <ModalBackground>
        <ProfileContainer onSubmit={handleSaveBtnClick}>
          <BasicInfoContainer>
            <BasicTitle>기본정보</BasicTitle>
            <NameInfo user={user} />
            <GithubInfo
              github={github}
              handleChangeInputs={handleChangeInputs}
            />
          </BasicInfoContainer>
          <CodriveContainer>
            <CodriveTitle>코드라이브 정보</CodriveTitle>
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
          </CodriveContainer>
          <ProfileButton>
            <CancelButton onClick={() => navigate(-1)}>취소하기</CancelButton>
            <CommonButton
              isActive={isActive}
              category="Profile_save"
              onClick={handleSaveBtnClick}
            />
          </ProfileButton>
        </ProfileContainer>
      </ModalBackground>
    </PageLayout>
  );
};

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgb(0 0 0 / 50%);
`;

const ProfileContainer = styled.form`
  display: flex;
  flex-direction: column;

  height: 554px;
  padding: 6.4rem 9.6rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.gray900};
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const BasicInfoContainer = styled.div`
  margin-bottom: 8rem;
`;

const CodriveContainer = styled.div`
  margin-bottom: 5.6rem;
`;

const BasicTitle = styled.h1`
  margin-bottom: 5.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const CodriveTitle = styled.h1`
  margin-bottom: 4rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const ProfileButton = styled.div`
  display: flex;

  margin: 0 auto;
`;

const CancelButton = styled.button`
  padding: 1rem 2rem;
  margin-right: 1.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

export default ProfilePage;
