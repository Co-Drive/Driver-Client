import styled from 'styled-components';
import FollowerList from '../components/Follower/Current/FollowerList';
import FollowerQuestions from '../components/Follower/Current/FollowerQuestions';
import FollowerRecommendCard from '../components/Follower/Personal/FollowerRecommendCard';
import PageLayout from '../components/PageLayout/PageLayout';
import useGetTodaysSolver from '../libs/hooks/Follower/useGetTodaysSolver';

const FollowerCurrentPage = () => {
  const { data, isLoading } = useGetTodaysSolver();
  const { followings } = !isLoading && data.data;

  return (
    <PageLayout category="홈">
      <FollowerCurrentPageContainer>
        <Header>
          <Title>팔로워 현황</Title>
          <Date>7월 15일 - 21일</Date>
          <Text>주간보드</Text>
        </Header>

        <FollowerQuestions users={followings} isLoading={isLoading} />

        <FollowerList />

        {!isLoading && followings.length === 0 && <FollowerRecommendCard />}
      </FollowerCurrentPageContainer>
    </PageLayout>
  );
};

export default FollowerCurrentPage;

const FollowerCurrentPageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 6rem 25.7rem 18rem;
`;

const Header = styled.header`
  display: flex;
  gap: 1.4rem;
  align-items: end;

  width: 100%;
`;

const Title = styled.p`
  margin-bottom: -0.3rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_bold_24};
`;

const Date = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.body_medium_16};
`;

const Text = styled(Date)`
  margin-left: -1rem;
`;
