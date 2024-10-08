import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcSecretBigWhite } from '../assets';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import PageLayout from '../components/PageLayout/PageLayout';
import { postAnswer } from '../libs/apis/GroupJoin/postAnswer';

const GroupJoin = () => {
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isNotMatchedPW, setIsNotMatchedPW] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { roomdId } = state || {};

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    setIsActive(value.length > 0);
    setIsNotMatchedPW(false); // 비밀번호가 틀렸다고 표시된 상태 초기화
  };

  const handleJoinButton = async () => {
    try {
      const { data } = await postAnswer({ roomdId, password });
      if (data) {
        navigate('/group-complete');
      }
    } catch (error) {
      alert('비밀번호가 틀렸습니다');
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
        onClick={handleJoinButton}
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
