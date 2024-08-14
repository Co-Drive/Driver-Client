import styled from 'styled-components';
import FollowerInfo from '../components/Follower/FollowerInfo';
import FollowerRecommendCard from '../components/Follower/Personal/FollowerRecommendCard';
import ParticipatingGroup from '../components/Follower/Personal/ParticipatingGroup';
import Solutions from '../components/Follower/Personal/Solutions';
import PageLayout from '../components/PageLayout/PageLayout';
import { FOLLOWER_DUMMY } from '../constants/Follower/followerConst';

const FollowerPage = () => {
  // 팔로워 정보를 불러오는 서버 통신 코드 추가 예정
  const {
    id,
    profileImg,
    nickname,
    isFollowed,
    introduce,
    language,
    github,
    rate,
    group,
    recommend,
  } = FOLLOWER_DUMMY;
  return (
    <PageLayout category="홈">
      <FollowerPageContainer>
        <TopContainer>
          <FollowerInfo
            info={{
              profileImg,
              nickname,
              isFollowed,
              introduce,
              language,
              github,
              rate,
            }}
          />

          {/* 나중에 다른 컴포넌트로 대체 예정 */}
          <Temp></Temp>
        </TopContainer>

        <Solutions id={id} nickname={nickname} />
        
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
  padding: 6.4rem 25.7rem 23.2rem;
`;

const TopContainer = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;

  margin-bottom: 8.8rem;
`;

// 나중에 지울 예정
const Temp = styled.div`
  width: 60.9rem;
  height: 41rem;
`;
