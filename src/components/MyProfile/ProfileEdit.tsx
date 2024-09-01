import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CommonButton from '../../common/CommonButton';
import { handleInput } from '../../utils/handleInput';
import GithubInfo from '../Profile/GIthubInfo';
import IntroInfo from '../Profile/IntroInfo';
import LanguageInfo from '../Profile/LanguageInfo';
import NameInfo from '../Profile/NameInfo';
import NicknameInfo from '../Profile/NicknameInfo';

interface ProfileEdiltPros {
  handleCloseModal: () => void;
}

const ProfileEdilt = ({ handleCloseModal }: ProfileEdiltPros) => {
  /* 기존 값들을 더미로 넣어둠 api 연결하면서 삭제 할 예정 */
  const initialData = {
    nickname: 'moonju',
    github: 'example',
    intro: '코테에 목숨을 걸었습니다!',
    language: 'JavaScript',
  };

  const user = '김문주';

  const [inputs, setInputs] = useState(initialData);
  const [selectedLanguage, setSelectedLanguage] = useState(
    initialData.language
  );
  const [initialInputs] = useState(initialData);

  const { nickname, github, intro } = inputs;

  // 입력 값의 유효성을 검사하는 변수
  const isActive =
    nickname.length > 0 &&
    nickname.length <= 10 &&
    intro.length > 0 &&
    intro.length <= 30 &&
    github.length > 0 &&
    selectedLanguage.length > 0;

  useEffect(() => {
    // 컴포넌트가 마운트되면 초기 상태를 설정합니다.
    setInputs(initialData);
    setSelectedLanguage(initialData.language);
  }, []);

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
    handleCloseModal(); // 모달 닫기
  };

  // 취소 버튼 클릭 처리 함수
  const handleCancelBtnClick = () => {
    // 입력 값들을 초기 상태로 되돌림
    setInputs(initialInputs);
    setSelectedLanguage(initialData.language);
    handleCloseModal(); // 모달 닫기
  };

  // 닉네임 중복 체크 함수 (구현 필요)
  const handleNicknameCheck = async () => {
    // 닉네임 중복 체크 로직 추가
  };

  return (
    <ModalBackground>
      <ProfileContainer onSubmit={handleSaveBtnClick}>
        <BasicInfoContainer>
          <BasicTitle>기본정보</BasicTitle>
          <NameInfo user={user} />
          <GithubInfo github={github} handleChangeInputs={handleChangeInputs} />
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
          <CancelButton type="button" onClick={handleCancelBtnClick}>
            취소하기
          </CancelButton>
          <CommonButton
            isActive={isActive}
            category="Profile_save"
            onClick={handleSaveBtnClick}
          />
        </ProfileButton>
      </ProfileContainer>
    </ModalBackground>
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
`;

const ProfileContainer = styled.form`
  display: flex;
  flex-direction: column;

  height: 55.4rem;
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
  gap: 1.6rem;
  justify-content: center;
`;

const CancelButton = styled.button`
  padding: 1rem 2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

export default ProfileEdilt;
