import { motion } from 'framer-motion';
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

import useScrollAnimation from '../libs/hooks/utils/useScrollAnimation';
import { handleClickGoTopBtn } from '../utils/handleClickGoTopBtn';

const FollowerPage = () => {
  const { id } = useParams();
  if (!id) return;
  const userId = parseInt(id);
  const { data, isLoading } = useGetUserProfile(userId) || {};
  const { nickname } = !isLoading && data?.data;
  const scrollAnimation = useScrollAnimation();

  sessionStorage.removeItem('friendname');

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

          <motion.div initial={{ opacity: 0 }} animate={scrollAnimation}>
            <GoTopBtn type="button" onClick={handleClickGoTopBtn}>
              <IcArrowUpBig />
            </GoTopBtn>
          </motion.div>
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
  padding: 6.4rem 0 33.2rem;
`;

const TopContainer = styled.section`
  display: flex;
  gap: 1.8rem;
  align-items: center;

  width: 92.4rem;
  margin-bottom: 8.8rem;
`;

const GoTopBtn = styled.button`
  position: fixed;
  top: calc(100vh - 15rem);
  left: calc(100vw - 22.3rem);
`;
