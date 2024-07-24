import { useState } from 'react';
import styled from 'styled-components';
import { IcSecretBigWhite } from '../assets';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import PageLayout from '../components/PageLayout/PageLayout';

const GroupJoin = () => {
  const [secretKey, setSecretKey] = useState('');

  const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSecretKey(value);
  };

  return (
    <PageLayout category={'group'}>
      <GroupJoinContainer>
        <IconContainer>
          <IcSecretBigWhite />
        </IconContainer>
        <Text>비밀그룹 생성하기</Text>
        <CommonInput
          category="secretKey"
          value={secretKey}
          handleChangeInputs={handleChangeInputs}
        />
        <CommonButton category="group_join" />
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

  background-color: pink;
`;

const IconContainer = styled.div`
  background-color: red;
`;

const Text = styled.p`
  background-color: darkgreen;
`;
