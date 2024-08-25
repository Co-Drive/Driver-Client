import styled from 'styled-components';
import { FollowerQuestionsProps } from '../../../types/Follower/Current/currentType';
import NumOfQuestions from './NumOfQuestions';
import TodaysSolver from './TodaysSolver';

const FollowerQuestions = ({ users, isLoading }: FollowerQuestionsProps) => {
  return (
    <FollowerQuestionsContainer>
      <NumOfQuestions />
      <TodaysSolver users={users} isLoading={isLoading} />
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
