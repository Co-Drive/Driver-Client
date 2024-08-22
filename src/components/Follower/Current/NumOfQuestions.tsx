import styled from 'styled-components';
import { IcInformation } from '../../../assets';
import { TOTAL_FOLLOWERS_DUMMY } from '../../../constants/Follower/currentConst';
import EmptyFollower from './EmptyFollower';
import FollowerCurrentGraph from './FollowerCurrentGraph';

const NumOfQuestions = () => {
  const { users } = TOTAL_FOLLOWERS_DUMMY;
  return (
    <NumOfQuestionsContainer>
      <Header>
        <Title>문제 개수 그래프</Title>
        <IcInformation />
      </Header>

      <GraphContainer>
        {users.length ? (
          <FollowerCurrentGraph users={users} />
        ) : (
          <EmptyFollower />
        )}
      </GraphContainer>
    </NumOfQuestionsContainer>
  );
};

export default NumOfQuestions;

const NumOfQuestionsContainer = styled.article`
  display: flex;
  gap: 3.2rem;
  justify-content: center;
  flex-direction: column;
  flex-grow: 2.1;

  margin-left: 0.2rem;
`;

const Header = styled.header`
  display: flex;
  gap: 2.4rem;
  align-items: center;

  margin-left: 0.4rem;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_20};
`;

const GraphContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: end;

  width: 100%;
  height: 23rem;
  padding: 7.6rem 2.1rem 1.4rem 2rem;

  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gray800};
  min-width: 61.1rem;
`;
