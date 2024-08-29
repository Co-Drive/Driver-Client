import { useState } from 'react';
import styled from 'styled-components';
import GroupInfo from '../components/GroupMember/GroupInfo';
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
