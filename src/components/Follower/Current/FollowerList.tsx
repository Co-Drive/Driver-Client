import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import CommonUserList from '../../../common/CommonUserList';
import FollowerFilter from './FollowerFilter';

const FollowerList = () => {
  const [selectedGroupId, setSelectedGroupId] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const sorting = String(searchParams.get('sort'));

  const updateSelectedGroupId = (id: number) => {
    setSelectedGroupId(id);
  };

  const handleClickSorting = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    const sort = innerHTML === '최신순' ? 'NEW' : 'DICT';
    setSearchParams({ page: '1', sort: sort });
  };

  return (
    <FollowerListContainer>
      <FollowerFilter
        sorting={sorting}
        updateSelectedGroupId={updateSelectedGroupId}
        handleClickSorting={handleClickSorting}
      />

      <CommonUserList
        sorting={sorting}
        selectedGroupId={selectedGroupId}
        isFollowerList={true}
      />
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
