import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommonUserList from '../../common/CommonUserList';
import MemberHeader from '../GroupMember/MemberHeader';

const AdminMemberList = () => {
  const { id } = useParams();
  if (!id) return;
  const groupId = parseInt(id);

  const [sorting, setSorting] = useState('최신순');

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setSorting(innerHTML);
  };
  return (
    <AdminListContainer>
      <MemberHeader
        isAdmin={true}
        sorting={sorting}
        handleClickSorting={handleClickSorting}
      />
      <CommonUserList
        roomId={groupId}
        isAdmin={true}
        sorting={sorting}
        selectedGroupId={groupId}
        isFollowerList={false}
      />
    </AdminListContainer>
  );
};

export default AdminMemberList;

const AdminListContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 5.8rem;
`;
