import styled from 'styled-components';
import NumOfQuestions from './NumOfQuestions';
import TodaysSolver from './TodaysSolver';

const FollowerQuestions = () => {
  return (
    <FollowerQuestionsContainer>
      <NumOfQuestions />
      <TodaysSolver />
    </FollowerQuestionsContainer>
  );
};

export default FollowerQuestions;

const FollowerQuestionsContainer = styled.section`
  display: flex;
  gap: 1.8rem;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 4rem;
`;
