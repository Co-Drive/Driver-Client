import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommonMonthSolve from '../common/CommonMonthSolve';
import FollowerInfo from '../components/Follower/FollowerInfo';
import FollowerRecommendCard from '../components/Follower/Personal/FollowerRecommendCard';
import ParticipatingGroup from '../components/Follower/Personal/ParticipatingGroup';
import Solutions from '../components/Follower/Personal/Solutions';
import PageLayout from '../components/PageLayout/PageLayout';
import useGetUserProfile from '../libs/hooks/Follower/useGetUserProfile';

const FollowerPage = () => {
  const { id } = useParams();
  if (!id) return;
  const { data, isLoading } = useGetUserProfile(parseInt(id));
  const { nickname, isFollowing } = !isLoading && data?.data;

  return (
    <PageLayout category="홈">
      {!isLoading && (
        <FollowerPageContainer>
          <TopContainer>
            <FollowerInfo info={data.data} />

            <CommonMonthSolve />
          </TopContainer>

          <Solutions
            id={parseInt(id)}
            nickname={nickname}
            isFollowed={isFollowing}
          />

          <ParticipatingGroup nickname={nickname} />

          <FollowerRecommendCard />
        </FollowerPageContainer>
      )}
    </PageLayout>
  );
};

export default FollowerPage;

const FollowerPageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  padding: 6.4rem 25.7rem 23.2rem;
`;

const TopContainer = styled.section`
  display: flex;
  gap: 1.8rem;
  align-items: center;

  width: 100%;
  margin-bottom: 8.8rem;
`;

// 나중에 지울 예정
const Temp = styled.div`
  flex-grow: 2;

  min-width: 60.9rem;

  height: 41rem;
`;
