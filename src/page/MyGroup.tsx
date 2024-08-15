import styled from 'styled-components';
import RecommendCard from '../common/RecommendCard';
import RecommendTitle from '../components/GroupAll/RecommendTitle';
import ActiveGroup from '../components/MyGroup/ActiveGroup';
import PageLayout from '../components/PageLayout/PageLayout';
import { GROUP_ALL_DUMMY } from '../constants/MyGroup/myGroupConts';

const GroupAllPage = () => {
  const { item, user, group } = GROUP_ALL_DUMMY;
  return (
    <PageLayout category={'그룹'}>
      <GroupAllPageContainer>
        <ActiveGroup item={item} />
        <Recommendcontainer>
          <RecommendTitle user={user} />
          <RecommendCard user={user} group={group} />
        </Recommendcontainer>
      </GroupAllPageContainer>
    </PageLayout>
  );
};
export default GroupAllPage;

const GroupAllPageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 6rem 21.5rem 17.8rem;
`;

const Recommendcontainer = styled.section`
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-direction: column;

  width: 100%;
`;
