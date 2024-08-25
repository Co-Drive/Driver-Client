import styled from 'styled-components';
import ActiveGroups from '../components/MyGroup/ActiveGroups';
import PersonalGroup from '../components/MyGroup/PersonalGroup';
import PageLayout from '../components/PageLayout/PageLayout';
import { GROUP_ALL_DUMMY } from '../constants/MyGroup/myGroupConts';
import useGetRecentRooms from '../libs/hooks/MyGroup/useGetRecentRooms';

const GroupAllPage = () => {
  const { group } = GROUP_ALL_DUMMY;
  const { data } = useGetRecentRooms();

  const totalActiveGroups = data ? data.data.rooms : [];

  return (
    <PageLayout category={'그룹'}>
      <GroupAllPageContainer>
        {totalActiveGroups.length !== 0 && (
          <ActiveGroups totalActiveGroups={totalActiveGroups} />
        )}

        <PersonalGroup group={group} />
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
