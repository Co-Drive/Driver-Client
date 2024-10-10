import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IcArrowUpBig } from '../assets';
import CommonMonthSolve from '../common/CommonMonthSolve';
import FollowerInfo from '../components/Follower/FollowerInfo';
import FollowerRecommendCard from '../components/Follower/Personal/FollowerRecommendCard';
import ParticipatingGroup from '../components/Follower/Personal/ParticipatingGroup';
import Solutions from '../components/Follower/Personal/Solutions';
import PageLayout from '../components/PageLayout/PageLayout';
import useGetUserProfile from '../libs/hooks/Follower/useGetUserProfile';
import { handleClickGoTopBtn } from '../utils/handleClickGoTopBtn';

const FollowerPage = () => {
  const { id } = useParams();
  if (!id) return;
  const userId = parseInt(id);
  const { data, isLoading } = useGetUserProfile(userId) || {};
  const { nickname } = !isLoading && data?.data;

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setOpacity(window.scrollY));
    return () => {
      window.removeEventListener('scroll', () => setOpacity(window.scrollY));
    };
  }, []);

  return (
    <PageLayout category="홈">
      {!isLoading && (
        <FollowerPageContainer>
          <TopContainer>
            <FollowerInfo info={data.data} />
            <CommonMonthSolve userId={userId} />
          </TopContainer>

          <Solutions id={userId} nickname={nickname} />

          <ParticipatingGroup nickname={nickname} />

          <FollowerRecommendCard />
          <GoTopBtn
            type="button"
            onClick={handleClickGoTopBtn}
            $opacity={opacity}
          >
            <IcArrowUpBig />
          </GoTopBtn>
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
  position: relative;

  width: 92.6rem;
  padding: 6.4rem 0 23.2rem;
`;

const TopContainer = styled.section`
  display: flex;
  gap: 1.8rem;
  align-items: center;

  width: 92.4rem;
  margin-bottom: 8.8rem;
`;

const GoTopBtn = styled.button<{ $opacity: number }>`
  opacity: ${({ $opacity }) => $opacity};

  position: fixed;
  top: calc(100vh - 15rem);
  left: calc(100vw - 22.3rem);
`;
