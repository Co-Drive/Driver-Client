import { useState } from 'react';
import styled from 'styled-components';
import { IcArrowRightSmallGray, TestWeekboardStatus } from '../assets';
import Header from '../components/Follower/CurrentSituation/Header';
import PageLayout from '../components/PageLayout/PageLayout';
import { DUMMY } from '../constants/Follower/currentConst';

const FollowerCurrentPage = () => {
  const { profile, boards } = DUMMY;
  const { imgSrc, nickname } = profile;

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

        <WeeklyContainer>
          <TopBar>
            <Profile>
              <Img src={imgSrc} />
              <Nickname>{nickname}</Nickname>
            </Profile>
            <MoreBtn type="button">
              <Text>그룹 더보기</Text>
              <IcArrowRightSmallGray />
            </MoreBtn>
          </TopBar>

          <WeeklyBoard>
            {boards.map((board) => {
              const { count, date } = board;
              return (
                <DailyBoard>
                  {/* count 관련 조건은 추후 수정 예정 */}
                  {count && <TestWeekboardStatus />}
                  <Date>{date}</Date>
                </DailyBoard>
              );
            })}
          </WeeklyBoard>
        </WeeklyContainer>
      </FollowerCurrentPageContainer>
    </PageLayout>
  );
};

export default FollowerCurrentPage;

const FollowerCurrentPageContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  min-width: 61.1rem;

  width: 100%;
  padding: 6rem 41.45rem 11.5rem;
`;

const WeeklyContainer = styled.article`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;

  width: 100%;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const Profile = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const Img = styled.img`
  width: 2.8rem;
  height: 2.8rem;

  border-radius: 5rem;

  object-fit: cover;
`;

const Nickname = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.title_semiBold_14};
`;

const MoreBtn = styled.button`
  display: flex;
  gap: 0.4rem;
  align-items: center;

  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.gray800};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  ${({ theme }) => theme.fonts.detail_regular_12};
`;

const WeeklyBoard = styled.article`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  width: 100%;
  padding: 1.2rem 1.2rem 1.2rem 1.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.gray800};
  row-gap: 0.5rem;
`;

const DailyBoard = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0.8rem 1.05rem;
`;

const Date = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body_medium_16};
`;
