import { useState } from 'react';
import styled from 'styled-components';
import { IcSecretBigWhite } from '../assets';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import PageLayout from '../components/PageLayout/PageLayout';

const GroupJoin = () => {
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    setIsActive(value.length > 0);
  };

  return (
    <PageLayout category={'group'}>
      <GroupJoinContainer>
        <IconContainer>
          <IcSecretBigWhite />
        </IconContainer>
        <Text>비밀그룹 참여하기</Text>
        <CommonInputContainer>
          <CommonInput
            category="password"
            value={password}
            handleChangeInputs={handleChangeInputs}
          />
        </CommonInputContainer>
        <CommonButton category="group_join" isActive={isActive} />
      </GroupJoinContainer>
    </PageLayout>
  );
};

export default GroupJoin;

const GroupJoinContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* background-color: pink; */
`;

const IconContainer = styled.div`
  margin-top: 12.9rem;
  margin-bottom: 1rem;

  /* background-color: red; */
`;

const CommonInputContainer = styled.div`
  margin-top: 4.2rem;
  margin-bottom: 4.4rem;

  /* background-color: blue; */
`;

const Text = styled.p`
  /* background-color: darkgreen; */
  ${({ theme }) => theme.fonts.title_bold_24}
  color: ${({ theme }) => theme.colors.white};
`;
