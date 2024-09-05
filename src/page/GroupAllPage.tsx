import styled from 'styled-components';
import GroupItem from '../components/GroupAll/GroupItem';
import GroupRecommend from '../components/GroupAll/GroupRecommend';
import PageLayout from '../components/PageLayout/PageLayout';

const GroupAllPage = () => {
  return (
    <PageLayout category={'그룹'}>
      <GroupAllPageContainer>
        <GroupRecommend />
        <GroupItem />
      </GroupAllPageContainer>
    </PageLayout>
  );
};
export default GroupAllPage;

const GroupAllPageContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 6rem 25.7rem 18rem;
`;
