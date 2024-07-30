import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Follower/CurrentSituation/Header';
import PageLayout from '../components/PageLayout/PageLayout';

const FollowerCurrentPage = () => {
  const [filter, setFilter] = useState({
    clickedGroup: '',
    isOptionOpen: false,
    sorting: '최신순',
  });

  const { isOptionOpen } = filter;

  const handleClickInput = () => {
    [
      setFilter({
        ...filter,
        isOptionOpen: !isOptionOpen,
      }),
    ];
  };

  const handleClickOption = (selectedGroup: string) => {
    setFilter({
      ...filter,
      clickedGroup: selectedGroup,
      isOptionOpen: false,
    });
  };

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setFilter({
      ...filter,
      sorting: innerHTML,
    });
  };

  return (
    <PageLayout category="홈">
      <FollowerCurrentPageContainer>
        <Header
          filter={filter}
          handleClickInput={handleClickInput}
          handleClickOption={handleClickOption}
          handleClickSorting={handleClickSorting}
        />
      </FollowerCurrentPageContainer>
    </PageLayout>
  );
};

export default FollowerCurrentPage;

const FollowerCurrentPageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 6rem 41.45rem 11.5rem;
`;
