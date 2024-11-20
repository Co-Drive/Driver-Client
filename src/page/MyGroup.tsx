import styled from 'styled-components';
import ActiveGroups from '../components/MyGroup/ActiveGroups';
import PersonalGroup from '../components/MyGroup/PersonalGroup';
import PageLayout from '../components/PageLayout/PageLayout';
import useGetRecentRooms from '../libs/hooks/MyGroup/useGetRecentRooms';

const GroupAllPage = () => {
  const { data } = useGetRecentRooms();

  const totalActiveGroups = data ? data.data.rooms : [];

  return (
    <PageLayout category={'그룹'}>
      <GroupAllPageContainer>
        {totalActiveGroups.length !== 0 && (
          <ActiveGroups totalActiveGroups={totalActiveGroups} />
        )}

        <PersonalGroup />
      </GroupAllPageContainer>
    </PageLayout>
  );
};
export default GroupAllPage;

const GroupAllPageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 101rem;
  padding: 6rem 0 33.2rem;
`;
