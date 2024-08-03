import styled from 'styled-components';
import RecommendCard from '../components/GroupAll/RecommendCard';
import RecommendTitle from '../components/GroupAll/RecommendTitle';
import TotalCard from '../components/GroupAll/TotalCard';
import PageLayout from '../components/PageLayout/PageLayout';
import { GROUP_ALL_DUMMY } from '../constants/GroupAll/groupAllConst';

const GroupAllPage = () => {
  const { item, user, group } = GROUP_ALL_DUMMY;
  return (
    <PageLayout category={'그룹'}>
      <GroupAllPageContainer>
        <TotalCard item={item} />
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

  width: 100%;
`;

const Recommendcontainer = styled.section`
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 7rem 25.7rem 21rem;
`;
