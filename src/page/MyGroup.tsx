import styled from 'styled-components';
import ActiveGroups from '../components/MyGroup/ActiveGroups';
import RecommendGroup from '../components/MyGroup/RecommendGroup';
import PageLayout from '../components/PageLayout/PageLayout';
import { GROUP_ALL_DUMMY } from '../constants/MyGroup/myGroupConts';

const GroupAllPage = () => {
  const { item, group } = GROUP_ALL_DUMMY;

  return (
    <PageLayout category={'그룹'}>
      <GroupAllPageContainer>
        <ActiveGroups totalActiveGroups={item} />

        <RecommendGroup group={group} />
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
