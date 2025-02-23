import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IcArrowLeftSmallGray, IcArrowRightSmallGray } from '../../assets';
import useGetRecentFollowerRecords from '../../libs/hooks/Follower/useGetRecentFollowerRecords';
import useGetMonthlySolution from '../../libs/hooks/Solution/useGetMonthlySolution';
import useGetUnsolvedMonths from '../../libs/hooks/Solution/useGetUnsolvedMonths';
import {
  ClickedValueProps,
  recordType,
  SavedSolutionListProps,
} from '../../types/Solution/solutionTypes';
import ListFilter from './ListFilter';
import SavedSolution from './SavedSolution';

const SavedSolutionList = ({
  userId,
  isSmallList,
  handleDisabledMoreBtn,
}: SavedSolutionListProps) => {
  const myId = sessionStorage.getItem('user');
  const isFollowerMode = myId && userId.toString() !== myId;
  const followerId = isFollowerMode ? userId : undefined;

  const [sorting, setSorting] = useState('최신순');
  const [searchParams, setSearchParams] = useSearchParams();
  const clickedPage = isSmallList ? 0 : Number(searchParams.get('page'));
  const selectedYear = isSmallList
    ? new Date().getFullYear()
    : Number(searchParams.get('year'));
  const selectedMonth = isSmallList
    ? new Date().getMonth() + 1
    : Number(searchParams.get('month'));

  const { unsolvedData, isLoading: isUnsolvedDataLoading } =
    useGetUnsolvedMonths({
      year: selectedYear,
      followerId,
    });

  const { data, isLoading: isRecordsLoading } = isSmallList
    ? useGetRecentFollowerRecords({ userId })
    : useGetMonthlySolution({
        userId: userId,
        sortType: sorting,
        year: selectedYear,
        month: selectedMonth,
        page: clickedPage - 1,
      });

  const { months: unsolvedMonths } =
    !isUnsolvedDataLoading && unsolvedData.data;

  const { records, totalPage } = !isRecordsLoading && data.data;

  const recentMonth = useMemo(() => {
    if (!isUnsolvedDataLoading)
      for (let month = 12; month > 0; month--) {
        if (!unsolvedMonths.includes(month)) {
          return month;
        }
      }
    return 1;
  }, [selectedYear, selectedMonth]);

  const recordsArr =
    !isRecordsLoading &&
    (isSmallList && records.length > 5 ? records.slice(0, 5) : records);
  const pages = Array.from(
    { length: totalPage ? totalPage : 1 },
    (_, idx) => idx + 1
  );

  const isLoading = isRecordsLoading || isUnsolvedDataLoading;

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setSorting(innerHTML);
  };

  const handleClickPrevBtn = () => {
    const prevPage = (clickedPage - 1).toString();
    const year = selectedYear.toString();
    const month = selectedMonth.toString();
    setSearchParams({ page: prevPage, year: year, month: month });
  };

  const handleClickPage = ({ clickedPage }: ClickedValueProps) => {
    const page = clickedPage.toString();
    const year = selectedYear.toString();
    const month = selectedMonth.toString();
    setSearchParams({ page: page.toString(), year: year, month: month });
  };

  const handleClickNextBtn = () => {
    const nextPage = (clickedPage + 1).toString();
    const year = selectedYear.toString();
    const month = selectedMonth.toString();
    setSearchParams({ page: nextPage, year: year, month: month });
  };

  useEffect(() => {
    if (handleDisabledMoreBtn && !isRecordsLoading)
      records.length <= 5
        ? handleDisabledMoreBtn(true)
        : handleDisabledMoreBtn(false);
  }, [records]);

  return (
    <ListContainer $isSmallList={isSmallList} $isLoading={isLoading}>
      {!isLoading && (
        <>
          {!isSmallList && (
            <ListFilter
              sorting={sorting}
              recentMonth={recentMonth}
              unsolvedMonths={unsolvedMonths}
              isUnsolvedDataLoading={isUnsolvedDataLoading}
              handleClickSorting={handleClickSorting}
            />
          )}

          {recordsArr.map((record: recordType) => {
            return (
              <SavedSolution
                key={record.recordId}
                followerId={followerId}
                record={record}
              />
            );
          })}

          {!isSmallList && (
            <PageNationBar>
              <IcArrowLeftSmallGray
                onClick={() => clickedPage !== 1 && handleClickPrevBtn()}
              />
              {pages.map((page) => {
                return (
                  <PageNumber
                    key={page}
                    $isClicked={clickedPage === page && totalPage > 0}
                    onClick={() => handleClickPage({ clickedPage: page })}
                  >
                    {page}
                  </PageNumber>
                );
              })}
              <IcArrowRightSmallGray
                onClick={() =>
                  clickedPage !== totalPage && handleClickNextBtn()
                }
              />
            </PageNationBar>
          )}
        </>
      )}
    </ListContainer>
  );
};

export default SavedSolutionList;

const ListContainer = styled.section<{
  $isSmallList: boolean;
  $isLoading: boolean;
}>`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;

  ${({ $isSmallList, $isLoading, theme }) => css`
    ${$isSmallList
      ? `border-top: 0.1rem solid ${theme.colors.gray600};`
      : `margin-top: 4.3rem;`}
    ${$isLoading && `height: 19.3rem;`}
  `};
`;

const PageNationBar = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 8.8rem;
`;

const PageNumber = styled.p<{ $isClicked: boolean }>`
  padding: 0.4rem 1rem;

  border-radius: 0.4rem;
  ${({ theme, $isClicked }) =>
    $isClicked
      ? css`
          background-color: ${theme.colors.gray700};
          color: ${theme.colors.white};
        `
      : css`
          background-color: transparent;
          color: ${theme.colors.gray200};
        `};
  ${({ theme }) => theme.fonts.body_medium_16};
`;
