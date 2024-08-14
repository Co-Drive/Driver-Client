import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { IcArrowLeftSmallGray, IcArrowRightSmallGray } from '../../assets';
import useGetMonthlySolution from '../../libs/hooks/Solution/useGetMonthlySolution';
import {
  UpdateSavedRecordsProps,
  UpdateTotalPageProps,
} from '../../types/Solution/solutionTypes';
import ListFilter from './ListFilter';
import SavedSolution from './SavedSolution';

export interface SavedSolutionListProps {
  isSmallList: boolean;
}

const SavedSolutionList = ({ isSmallList }: SavedSolutionListProps) => {
  const totalPageRef = useRef(0);
  const pages = Array.from(
    { length: totalPageRef.current },
    (_, idx) => idx + 1
  );
  const YEAR = new Date().getFullYear();
  const MONTH = new Date().getMonth() + 1;

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
  const [clickedPage, setClickedPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState({
    year: YEAR,
    month: MONTH,
  });

  const { year, month } = selectedDate;

  const { data } = useGetMonthlySolution({
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
      } else {
        setSavedRecords([]);
      }
    }
  };

  const handleClickPrevBtn = (isPage: boolean) => {
    isPage
      ? setClickedPage((prev) => prev - 1)
      : setSelectedDate({
          ...selectedDate,
          year: year - 1,
        });
  };

  const handleClickValue = (value: number, isPage: boolean) => {
    isPage
      ? setClickedPage(value)
      : setSelectedDate({
          ...selectedDate,
          month: month,
        });
  };

  const handleClickNextBtn = (isPage: boolean) => {
    isPage
      ? setClickedPage((prev) => prev + 1)
      : setSelectedDate({
          ...selectedDate,
          year: year + 1,
        });
  };

  useEffect(() => {
    updateTotalPage({ data });
    updateRecords({ data });
  }, [data]);

  return (
    <ListContainer>
      {data && (
        <>
          {!isSmallList && (
            <ListFilter
              year={year}
              month={month}
              handleClickPrevBtn={handleClickPrevBtn}
              handleClickMonth={handleClickValue}
              handleClickNextBtn={handleClickNextBtn}
            />
          )}

          {savedRecords.map((record) => {
            return <SavedSolution key={record.recordId} record={record} />;
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

const ListContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;

const PageNationBar = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 4.8rem;
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
