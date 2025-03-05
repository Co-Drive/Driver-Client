import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import CommonUserList from '../../common/CommonUserList';
import MemberHeader from '../GroupMember/MemberHeader';

const AdminMemberList = () => {
  const { id } = useParams();
  if (!id) return;
  const groupId = parseInt(id);

  const [searchParams, setSearchParams] = useSearchParams();
  const sorting = String(searchParams.get('sort'));

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    const sort = innerHTML === '최신순' ? 'NEW' : 'DICT';
    setSearchParams({ page: '1', sort: sort });
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
