import styled from 'styled-components';
import FollowerRecommendCard from '../components/Follower/Personal/FollowerRecommendCard';
import ParticipatingGroup from '../components/Follower/Personal/ParticipatingGroup';
import PageLayout from '../components/PageLayout/PageLayout';
import { FOLLOWER_DUMMY } from '../constants/Follower/followerConst';

const FollowerPage = () => {
  const {
    // profileImg,
    // nickname,
    // isFollowed,
    // introduce,
    // github,
    group,
    recommend,
  } = FOLLOWER_DUMMY;
  return (
    <PageLayout category="홈">
      <FollowerPageContainer>
        <ParticipatingGroup group={group} />
      </FollowerPageContainer>
      <FollowerPageContainer>
        <FollowerRecommendCard recommend={recommend} />
      </FollowerPageContainer>
    </PageLayout>
  );
};

export default FollowerPage;

const FollowerPageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 8.6rem 21.8rem 23.2rem 21.5rem;
`;
