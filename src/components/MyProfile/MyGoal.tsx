import { useState } from 'react';
import styled from 'styled-components';
import { IcAdd, IcMinusWhite } from '../../assets';

const MyGoal = () => {
  const [number, setNumber] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveBtnClick = () => {
    setIsSaved(true);
  };

  const handleCancelBtnClick = () => {
    setIsSaved(false);
  };

  const isActionAllowed = () => !isSaved;

  // 증가 함수: isActionAllowed가 true일 경우에만 작동
  const increaseNumber = () => {
    if (isActionAllowed() && number < 7) {
      setNumber((prev) => prev + 1);
    }
  };

  // 감소 함수: isActionAllowed가 true일 경우에만 작동
  const decreaseNumber = () => {
    if (isActionAllowed() && number > 0) {
      setNumber((prev) => prev - 1);
    }
  };

  return (
    <MyGoalContainer>
      <Title>나의 목표</Title>
      <MyGoalBox>
        <MyInfoContainer>
          <Info>
            <Text>
              평소의 문제풀이 개수 또는 원하는 문제 풀이 개수를 기준으로
            </Text>
            <Text>일일 목표를 설정해주세요</Text>
          </Info>
          <Goal>일일 목표는 최대 7개까지 가능합니다</Goal>
        </MyInfoContainer>
        <GoalButton $isSaved={isSaved}>
          <IcMinusWhite onClick={decreaseNumber} />
          <Counter>{number}</Counter>
          <IcAdd onClick={increaseNumber} />
        </GoalButton>
        <ProfileButton>
          {isSaved ? (
            <CancelButton type="button" onClick={handleCancelBtnClick}>
              수정하기
            </CancelButton>
          ) : (
            <SaveButton type="button" onClick={handleSaveBtnClick}>
              저장하기
            </SaveButton>
          )}
        </ProfileButton>
      </MyGoalBox>
    </MyGoalContainer>
  );
};

const MyGoalContainer = styled.article``;

const Title = styled.h1`
  margin-bottom: 2.8rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_24};
`;

const MyGoalBox = styled.div`
  display: flex;

  width: 92.6rem;
  margin-left: 0.2rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const MyInfoContainer = styled.div`
  padding: 3.2rem 0 3.2rem 3.2rem;
  margin-right: 8.4rem;
`;

const Info = styled.div``;
const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_semiBold_18};
`;

const Goal = styled.div`
  margin-top: 2.6rem;

  color: ${({ theme }) => theme.colors.gray200};

  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const GoalButton = styled.div<{ $isSaved?: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  margin-right: 10.5rem;

  pointer-events: ${(props) => (props.$isSaved ? 'none' : 'auto')};
`;

const Counter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 9rem;
  height: 9rem;
  margin: 0;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray700};
  ${({ theme }) => theme.fonts.title_bold_46};
  color: ${({ theme }) => theme.colors.white};
`;

const ProfileButton = styled.div`
  gap: 1.6rem;
  justify-content: center;

  padding-top: 2rem;
`;

const CancelButton = styled.button`
  padding: 1rem 2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme }) => theme.colors.gray100};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const SaveButton = styled.button`
  padding: 1rem 2rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
  color: ${({ theme }) => theme.colors.gray900};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

export default MyGoal;
