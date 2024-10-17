import styled from 'styled-components';
import GroupInfo from '../components/GroupMember/GroupInfo';
import MemberList from '../components/GroupMember/MemberList';
import Top3Members from '../components/GroupMember/Top3Members';
import PageLayout from '../components/PageLayout/PageLayout';

const GroupMemberPage = () => {
  return (
    <PageLayout category="그룹">
      <GroupMemberContainer>
        <GroupInfo isAdmin={false} />
        <Top3Members />
        <MemberList />
      </GroupMemberContainer>
    </PageLayout>
  );
};

export default GroupMemberPage;

const GroupMemberContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 6.4rem 25.7rem 14.4rem;
`;
