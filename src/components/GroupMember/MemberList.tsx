import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import CommonUserList from '../../common/CommonUserList';
import MemberHeader from './MemberHeader';

const MemberList = () => {
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
    <MemberListContainer>
      <MemberHeader sorting={sorting} handleClickSorting={handleClickSorting} />
      <CommonUserList
        sorting={sorting}
        selectedGroupId={groupId}
        isFollowerList={false}
      />
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
