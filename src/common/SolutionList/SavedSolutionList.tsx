import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { IcArrowLeftSmallGray, IcArrowRightSmallGray } from '../../assets';
import useGetMonthlySolution from '../../libs/hooks/Solution/useGetMonthlySolution';
import {
  UpdateSavedRecordsProps,
  UpdateTotalPageProps,
} from '../../types/Solution/solutionTypes';
import { removeSavedPage } from '../../utils/removeSavedPage';
import ListFilter from './ListFilter';
import SavedSolution from './SavedSolution';

export interface SavedSolutionListProps {
  userId: number;
  isSmallList: boolean;
  handleDisabledMoreBtn?: (value: boolean) => void;
}

const SavedSolutionList = ({
  userId,
  isSmallList,
  handleDisabledMoreBtn,
}: SavedSolutionListProps) => {
  const savedPage = sessionStorage.getItem('savedPage');
  const myId = sessionStorage.getItem('user');
  const isFollowerMode = myId && userId.toString() !== myId;
  const followerId = isFollowerMode ? userId : undefined;
  const totalPageRef = useRef(0);
  const pages = Array.from(
    { length: totalPageRef.current },
    (_, idx) => idx + 1
  );
  const YEAR = new Date().getFullYear();
  const MONTH = new Date().getMonth() + 1;

  const [sorting, setSorting] = useState('최신순');
  const [savedRecords, setSavedRecords] = useState([
    {
      recordId: 0,
      title: '',
      level: 0,
      tags: [''],
      platform: '',
      problemUrl: '',
      createdAt: '',
    },
  ]);
  const [clickedPage, setClickedPage] = useState(
    savedPage ? parseInt(savedPage) : 1
  );
  const [selectedDate, setSelectedDate] = useState({
    year: YEAR,
    month: MONTH,
  });

  const { year, month } = selectedDate;

  const { data } = useGetMonthlySolution({
    userId: userId,
    sortType: sorting,
    year: year,
    month: month,
    page: clickedPage - 1,
    isSmallList: isSmallList,
  });

  const updateTotalPage = async ({ data }: UpdateTotalPageProps) => {
    if (data) {
      const { totalPage } = data.data;
      totalPageRef.current = totalPage;
    }
  };

  const updateRecords = async ({ data }: UpdateSavedRecordsProps) => {
    if (data) {
      const { records } = data.data;

      if (records.length) {
        setSavedRecords(records);
        handleDisabledMoreBtn && handleDisabledMoreBtn(false);
      } else {
        setSavedRecords([]);
        handleDisabledMoreBtn && handleDisabledMoreBtn(true);
      }
    }
  };

  const handleClickSorting = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setSorting(innerHTML);
    // 최신순/ 가나다순에 따라 서버 통신 들어갈 예정
  };

  const handleClickPrevBtn = (isPage: boolean) => {
    isPage
      ? setClickedPage((prev) => prev - 1)
      : setSelectedDate({
          ...selectedDate,
          year: year - 1,
        });
    removeSavedPage();
  };

  const handleClickValue = (value: number, isPage: boolean) => {
    isPage
      ? setClickedPage(value)
      : setSelectedDate({
          ...selectedDate,
          month: month,
        });
    removeSavedPage();
  };

  const handleClickNextBtn = (isPage: boolean) => {
    isPage
      ? setClickedPage((prev) => prev + 1)
      : setSelectedDate({
          ...selectedDate,
          year: year + 1,
        });
    removeSavedPage();
  };

  useEffect(() => {
    updateTotalPage({ data });
    updateRecords({ data });
  }, [data]);

  return (
    <ListContainer $isSmallList={isSmallList}>
      {data && (
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

          {savedRecords.map((record) => {
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
                    $isClicked={clickedPage === page}
                    onClick={() => handleClickValue(page, true)}
                  >
                    {page}
                  </PageNumber>
                );
              })}
              <IcArrowRightSmallGray
                onClick={() =>
                  clickedPage !== totalPageRef.current &&
                  handleClickNextBtn(true)
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
