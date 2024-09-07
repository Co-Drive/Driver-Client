import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IcAdd, IcMinusWhite } from '../../assets';
import ErrorModal from '../../common/Modal/ErrorModal/ErrorModal';
import usePatchGoal from '../../libs/hooks/MyProfile/usePatchGoal';

const MyGoal = () => {
  const { mutation, patchGoalErr } = usePatchGoal(() => setIsSaved(true));
  const isError = patchGoalErr.length > 0;

  // 서버에서 받아온 목표 값으로 초기화, 로컬 저장소에서 값 불러오기
  const [number, setNumber] = useState(() => {
    const savedGoal = localStorage.getItem('goal');
    return savedGoal ? parseInt(savedGoal, 10) : 0;
  });

  const [isSaved, setIsSaved] = useState(() => {
    const savedIsSaved = localStorage.getItem('isSaved');
    return savedIsSaved === 'true';
  });
  const [onErrModal, setOnErrModal] = useState(isError);

  const handleSaveBtnClick = () => {
    if (number === 0) {
      setOnErrModal(true);
      return;
    }
    mutation(number);
    localStorage.setItem('goal', number.toString());
    localStorage.setItem('isSaved', 'true');
    setIsSaved(true);
  };

  const handleCancelBtnClick = () => {
    localStorage.removeItem('goal');
    localStorage.setItem('isSaved', 'false');
    setIsSaved(false);
  };

  const isActionAllowed = !isSaved;

  // 증가 함수: isActionAllowed가 true일 경우에만 작동
  const increaseNumber = () => {
    if (isActionAllowed && number < 7) {
      setNumber((prev) => prev + 1);
    }
  };

  // 감소 함수: isActionAllowed가 true일 경우에만 작동
  const decreaseNumber = () => {
    if (isActionAllowed && number > 0) {
      setNumber((prev) => prev - 1);
    }
  };

  useEffect(() => {
    // patchGoalErr에 메시지가 없을 때도 모달을 띄우기 위해 수정
    if (isError || onErrModal) {
      setOnErrModal(true);
    }
  }, [isError, onErrModal]);

  return (
    <MyGoalContainer>
      <Title>나의 목표</Title>
      <MyGoalBox>
        <MyInfoContainer>
          <Text>
            평소의 문제풀이 개수 또는 원하는 문제 풀이 개수를 기준으로
          </Text>
          <Text>일일 목표를 설정해주세요</Text>
          <Goal>일일 목표는 최대 7개까지 가능합니다</Goal>
        </MyInfoContainer>
        <GoalButton $isSaved={isSaved}>
          {!isSaved && (
            <>
              <IcMinusWhite onClick={decreaseNumber} />
              <Counter $isSaved={isSaved}>
                <Num>{number}</Num>
              </Counter>
              <IcAdd onClick={increaseNumber} />
            </>
          )}
          {isSaved && (
            <DeactivateContainer>
              <Counter $isSaved={isSaved}>
                <div>
                  <Num>{number}</Num>
                  <NumberText>문제</NumberText>
                </div>
              </Counter>
            </DeactivateContainer>
          )}
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

      {onErrModal && (
        <ErrorModal
          onClose={() => setOnErrModal(false)}
          errMsg={number === 0 ? '잘못된 요청입니다' : patchGoalErr}
        />
      )}
    </MyGoalContainer>
  );
};

const MyGoalContainer = styled.article`
  margin-bottom: 10.9rem;
`;

const Title = styled.h1`
  margin-bottom: 2.8rem;
  margin-left: 0.2rem;

  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title_bold_24};
`;

const MyGoalBox = styled.div`
  display: flex;

  width: 92.6rem;

  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray800};
`;

const MyInfoContainer = styled.div`
  padding: 3.2rem 0 3.2rem 3.2rem;
  margin-right: 8.4rem;
`;

const Text = styled.p`
  margin-bottom: 0.6rem;

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

const Counter = styled.div<{ $isSaved?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 9rem;
  height: 9rem;
  margin: 0;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray700};
  color: ${({ theme, $isSaved }) =>
    $isSaved ? theme.colors.white : theme.colors.codrive_green};
`;

const DeactivateContainer = styled.div`
  margin: 0 3.8rem;

  text-align: center;
`;

const Num = styled.span<{ $isSaved?: boolean }>`
  ${({ theme, $isSaved }) =>
    $isSaved ? theme.fonts.title_bold_32 : theme.fonts.title_bold_32};
`;

const NumberText = styled.div`
  ${({ theme }) => theme.fonts.body_ligth_10};
  color: ${({ theme }) => theme.colors.gray200};
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
