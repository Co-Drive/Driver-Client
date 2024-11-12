import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { IcArrowLeftSmallGray, IcArrowRightSmallGray } from '../../assets';
import useGetRecentFollowerRecords from '../../libs/hooks/Follower/useGetRecentFollowerRecords';
import useGetMonthlySolution from '../../libs/hooks/Solution/useGetMonthlySolution';
import {
  ClickedValueProps,
  recordType,
  SavedSolutionListProps,
} from '../../types/Solution/solutionTypes';
import { removeSavedPage } from '../../utils/removeSavedPage';
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

  const YEAR = new Date().getFullYear();
  const MONTH = new Date().getMonth() + 1;

  const [sorting, setSorting] = useState('최신순');
  const [clickedPage, setClickedPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState({
    year: YEAR,
    month: MONTH,
  });

  const { year, month } = selectedDate;
  const { data, isLoading } = isSmallList
    ? useGetRecentFollowerRecords({ userId })
    : useGetMonthlySolution({
        userId: userId,
        sortType: sorting,
        year: year,
        month: month,
        page: clickedPage - 1,
      });

  const { records, totalPage } = !isLoading && data.data;
  const recordsArr =
    !isLoading && (records.length > 5 ? records.slice(0, 5) : records);
  const pages = Array.from(
    { length: totalPage ? totalPage : 1 },
    (_, idx) => idx + 1
  );

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setSorting(innerHTML);
    // 최신순/ 가나다순에 따라 서버 통신 들어갈 예정
  };

  const handleClickPrevBtn = (isPage: boolean) => {
    if (isPage) {
      setClickedPage((prev) => prev - 1);
    } else {
      setSelectedDate({
        ...selectedDate,
        year: year - 1,
      });
      setClickedPage(1);
    }

    removeSavedPage();
  };

  const handleClickValue = ({ e, value }: ClickedValueProps) => {
    if (value) {
      setClickedPage(value);
    } else {
      if (e) {
        const clickedMonth = parseInt(e.currentTarget.innerHTML);
        setSelectedDate({
          ...selectedDate,
          month: clickedMonth,
        });
        setClickedPage(1);
      }
    }

    removeSavedPage();
  };

  const handleClickNextBtn = (isPage: boolean) => {
    if (isPage) {
      setClickedPage((prev) => prev + 1);
    } else {
      setSelectedDate({
        ...selectedDate,
        year: year + 1,
      });
      setClickedPage(1);
    }

    removeSavedPage();
  };

  useEffect(() => {
    if (handleDisabledMoreBtn && !isLoading)
      records.length <= 5
        ? handleDisabledMoreBtn(true)
        : handleDisabledMoreBtn(false);
  }, [records]);

  return (
    <ListContainer $isSmallList={isSmallList}>
      {!isLoading && (
        <>
          {!isSmallList && (
            <ListFilter
              sorting={sorting}
              year={year}
              month={month}
              handleClickSorting={handleClickSorting}
              handleClickPrevBtn={handleClickPrevBtn}
              handleClickMonth={handleClickValue}
              handleClickNextBtn={handleClickNextBtn}
            />
          )}

          {recordsArr.map((record: recordType) => {
            return (
              <SavedSolution
                key={record.recordId}
                followerId={followerId}
                record={record}
                clickedPage={clickedPage}
              />
            );
          })}

          {!isSmallList && (
            <PageNationBar>
              <IcArrowLeftSmallGray
                onClick={() => clickedPage !== 1 && handleClickPrevBtn(true)}
              />
              {pages.map((page) => {
                return (
                  <PageNumber
                    key={page}
                    $isClicked={clickedPage === page && totalPage > 0}
                    onClick={() => handleClickValue({ value: page })}
                  >
                    {page}
                  </PageNumber>
                );
              })}
              <IcArrowRightSmallGray
                onClick={() =>
                  clickedPage !== totalPage && handleClickNextBtn(true)
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

const ListContainer = styled.section<{ $isSmallList: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  ${({ $isSmallList }) =>
    !$isSmallList &&
    css`
      margin-top: 4.3rem;
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
