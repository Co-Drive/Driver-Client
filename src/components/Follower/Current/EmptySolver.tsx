import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IcWorkbookBlack } from '../../../assets';

const EmptySolver = () => {
  const navigate = useNavigate();

  const handleClickSolveBtn = () => {
    navigate('/solve');
  };

  return (
    <EmptySolverContainer>
      <TextContainer>
        <Text>오늘 문제를 푼 사용자가 아직 없어요</Text>
        <Text>가장 먼저 문제를 풀어보세요!</Text>
      </TextContainer>

      <SolveBtn type="button" onClick={handleClickSolveBtn}>
        <IcWorkbookBlack />
        <BtnText>문제풀이 인증하러 가기</BtnText>
      </SolveBtn>
    </EmptySolverContainer>
  );
};

export default EmptySolver;

const EmptySolverContainer = styled.div`
  display: flex;
  gap: 9.2rem;
  align-items: baseline;
  flex-direction: column;

  margin: 2.8rem 0 2.4rem 2.4rem;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.title_bold_16};
`;

const SolveBtn = styled.button`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  padding: 0.9rem 1.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.codrive_green};
`;

const BtnText = styled.p`
  ${({ theme }) => theme.fonts.title_bold_16};
`;
