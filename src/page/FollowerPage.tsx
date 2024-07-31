import styled from 'styled-components';
import FollowerRecommendCard from '../components/Follower/Personal/FollowerRecommendCard';
import ParticipatingGroup from '../components/Follower/Personal/ParticipatingGroup';
import FollowerInfo from '../components/Follower/FollowerInfo';
import PageLayout from '../components/PageLayout/PageLayout';
import { FOLLOWER_DUMMY } from '../constants/Follower/followerConst';

const FollowerPage = () => {
  const {
    profileImg,
    nickname,
    isFollowed,
    introduce,
    language,
    github,
    group,
    recommend,
  } = FOLLOWER_DUMMY;
  return (
    <PageLayout category="홈">
      <FollowerPageContainer>
        <FollowerInfo
          info={{
            profileImg,
            nickname,
            isFollowed,
            introduce,
            language,
            github,
          }}
        />
        <ParticipatingGroup group={group} />

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

  width: 100%;
  padding: 8.6rem 25.7rem 21rem;
`;
