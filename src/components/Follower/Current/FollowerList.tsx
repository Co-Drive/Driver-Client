import { useState } from 'react';
import styled from 'styled-components';
import CommonUserList from '../../../common/CommonUserList';
import FollowerFilter from './FollowerFilter';

const FollowerList = () => {
  const [selectedGroupId, setSelectedGroupId] = useState(0);
  const [sorting, setSorting] = useState('최신순');

  const updateSelectedGroupId = (id: number) => {
    setSelectedGroupId(id);
  };

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setSorting(innerHTML);
  };

  return (
    <FollowerListContainer>
      <FollowerFilter
        sorting={sorting}
        updateSelectedGroupId={updateSelectedGroupId}
        handleClickSorting={handleClickSorting}
      />

      <CommonUserList sorting={sorting} selectedGroupId={selectedGroupId} isFollowerList={true} />
    </FollowerListContainer>
  );
};

export default FollowerList;

const FollowerListContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;
