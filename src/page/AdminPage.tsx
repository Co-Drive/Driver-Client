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
      <AdminPageContainer>
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

const AdminPageContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding: 6.4rem 25.7rem 14.4rem;
`;
