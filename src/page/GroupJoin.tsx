import { useState } from 'react';
import styled from 'styled-components';
import { IcSecretBigWhite } from '../assets';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import PageLayout from '../components/PageLayout/PageLayout';

const GroupJoin = () => {
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isNotMatchedPW, setIsNotMatchedPW] = useState(false);
  const correctPassword = false; // 백엔드 사용자PW 비밀번호

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    setIsActive(value.length > 0);
    setIsNotMatchedPW(false); // 비밀번호가 틀렸다고 표시된 상태 초기화
  };

  const handleButtonClick = () => {
    if (correctPassword) {
      console.log('그룹에 성공적으로 참여하였습니다');
    } else {
      setIsNotMatchedPW(true);
      console.log('비밀번호가 틀렸습니다');
    }
  };

  return (
    /* category 역할이 헤더 눌렀을 떄 어떤 페이지로 이동하냐인데, 그룹 생성 완료하면 카테고리 변경하기  */
    <PageLayout category={'group'}>
      <IconContainer>
        <IcSecretBigWhite />
      </IconContainer>
      <Text>비밀그룹 참여하기</Text>
      <CommonInputContainer>
        <CommonInput
          category="password"
          value={password}
          handleChangeInputs={handleChangeInputs}
          isNotMatchedPW={isNotMatchedPW}
        />
      </CommonInputContainer>
      <CommonButton
        category="group_join"
        isActive={isActive}
        onClick={handleButtonClick}
      />
    </PageLayout>
  );
};

export default GroupJoin;

const IconContainer = styled.div`
  margin-top: 12.9rem;
  margin-bottom: 1rem;
`;

const CommonInputContainer = styled.div`
  margin-top: 4.2rem;
  margin-bottom: 4.4rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.title_bold_24}
  color: ${({ theme }) => theme.colors.white}
`;
