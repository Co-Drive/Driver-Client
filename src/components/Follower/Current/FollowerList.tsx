import { useState } from 'react';
import styled from 'styled-components';
import CommonUserList from '../../../common/CommonUserList';
import useGetFollowerSummary from '../../../libs/hooks/Follower/useGetFollowerSummary';
import FollowerRecommendCard from '../Personal/FollowerRecommendCard';
import FollowerFilter from './FollowerFilter';

const FollowerList = () => {
  const [selectedGroupId, setSelectedGroupId] = useState(0);
  const [sorting, setSorting] = useState('최신순');
  const [clickedPage, setClickedPage] = useState(1);

  const { data, isLoading } = useGetFollowerSummary({
    page: clickedPage - 1,
    sortType: sorting,
    groupId: selectedGroupId,
  });
  const { totalPage, followings } = !isLoading && data.data;

  const updateSelectedGroupId = (id: number) => {
    setSelectedGroupId(id);
  };

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setSorting(innerHTML);
  };

  const handleClickPrevBtn = () => {
    setClickedPage((prev) => prev - 1);
  };

  const handleClickPageNumber = (page: number) => {
    setClickedPage(page);
  };

  const handleClickNextBtn = () => {
    setClickedPage((prev) => prev + 1);
  };

  return (
    <FollowerListContainer>
      <FollowerFilter
        sorting={sorting}
        updateSelectedGroupId={updateSelectedGroupId}
        handleClickSorting={handleClickSorting}
      />

      <CommonUserList
        clickedPage={clickedPage}
        totalPage={totalPage}
        isLoading={isLoading}
        followings={followings}
        handleClickPrevBtn={handleClickPrevBtn}
        handleClickPageNumber={handleClickPageNumber}
        handleClickNextBtn={handleClickNextBtn}
      />

      {!isLoading && followings.length === 0 && <FollowerRecommendCard />}
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
