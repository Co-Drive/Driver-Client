import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CommonUserList from '../../common/CommonUserList';
import MemberHeader from './MemberHeader';

const MemberList = () => {
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
    <MemberListContainer>
      <MemberHeader sorting={sorting} handleClickSorting={handleClickSorting} />
      <CommonUserList sorting={sorting} selectedGroupId={groupId} />
    </MemberListContainer>
  );
};

export default MemberList;

const MemberListContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 5.8rem;
`;
