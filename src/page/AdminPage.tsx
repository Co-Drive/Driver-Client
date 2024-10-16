import { useState } from 'react';
import styled from 'styled-components';
import AdminMemberList from '../components/Admin/AdminMemberList';
import GroupStatistics from '../components/Admin/GroupStatistics/GroupStatistics';
import GroupInfo from '../components/GroupMember/GroupInfo';
import MemberList from '../components/GroupMember/MemberList';
import Top3Members from '../components/GroupMember/Top3Members';
import PageLayout from '../components/PageLayout/PageLayout';

const AdminPage = () => {
  const [adminMode, setAdminMode] = useState(false);

  const handleClickAdminToggle = () => {
    setAdminMode(!adminMode);
  };

  return (
    <PageLayout category="그룹">
      <AdminPageContainer $isAdminMode={adminMode}>
        <GroupInfo
          isAdmin={true}
          adminMode={adminMode}
          handleClickAdminToggle={handleClickAdminToggle}
        />
        {adminMode ? <GroupStatistics /> : <Top3Members />}
        {adminMode ? <AdminMemberList /> : <MemberList />}
      </AdminPageContainer>
    </PageLayout>
  );
};

export default AdminPage;

const AdminPageContainer = styled.section<{ $isAdminMode: boolean }>`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 92.6rem;
  padding: ${({ $isAdminMode }) =>
    $isAdminMode ? `6.4rem 0 18rem` : `6.4rem 0 14.4rem`};
`;
