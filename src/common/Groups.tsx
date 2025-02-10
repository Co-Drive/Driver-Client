import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IcArrowLeftSmallGray, IcArrowRightSmallGray } from '../assets';
import { PersonalGroupProps } from '../types/MyGroup/myGroupType';
import {
  handleClickNextBtn,
  handleClickPage,
  handleClickPrevBtn,
} from '../utils/handleClickPage';
import RecommendCard from './RecommendCard';

const Groups = ({ group, totalPage }: PersonalGroupProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const clickedPage = Number(searchParams.get('page'));
  const pages = Array.from(
    { length: totalPage > 0 ? totalPage : 1 },
    (_, idx) => idx + 1
  );

  return (
    <React.Fragment>
      <RecommendCard group={group} isLongPage={true} />

      <PageNationBar>
        <IcArrowLeftSmallGray
          onClick={() =>
            clickedPage > 1 &&
            handleClickPrevBtn({ clickedPage, setSearchParams })
          }
        />
        {pages.map((page) => {
          return (
            <PageNumber
              key={page}
              $isClicked={totalPage > 0 && clickedPage === page}
              onClick={() =>
                handleClickPage({ clickedPage: page, setSearchParams })
              }
            >
              {page}
            </PageNumber>
          );
        })}
        <IcArrowRightSmallGray
          onClick={() =>
            clickedPage !== totalPage &&
            handleClickNextBtn({ clickedPage, setSearchParams })
          }
        />
      </PageNationBar>
    </React.Fragment>
  );
};

export default Groups;

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
