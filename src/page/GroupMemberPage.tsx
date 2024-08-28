import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import GroupInfo from '../components/GroupMember/GroupInfo';
import PageLayout from '../components/PageLayout/PageLayout';
import useGetDetail from '../libs/hooks/GroupDetail/useGetDetail';

const GroupMemberPage = () => {

  return (
    <PageLayout category="그룹">
      <GroupMemberContainer>
        <GroupInfo />
      </GroupMemberContainer>
    </PageLayout>
  );
};

export default GroupMemberPage;

const GroupMemberContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
