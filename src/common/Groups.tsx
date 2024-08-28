import React from 'react';
import styled, { css } from 'styled-components';
import { IcArrowLeftSmallGray, IcArrowRightSmallGray } from '../assets';
import { PersonalGroupProps } from '../types/MyGroup/myGroupType';
import RecommendCard from './RecommendCard';

const Groups = ({
  group,
  totalPage,
  clickedPage,
  handleClickPages,
}: PersonalGroupProps) => {
  const pages = Array.from({ length: totalPage }, (_, idx) => idx + 1);
  const { handleClickPrevBtn, handleClickPage, handleClickNextBtn } =
    handleClickPages;

  return (
    <React.Fragment>
      <RecommendCard group={group} isLongPage={true} />

      <PageNationBar>
        <IcArrowLeftSmallGray
          onClick={() => clickedPage !== 1 && handleClickPrevBtn()}
        />
        {pages.map((page) => {
          return (
            <PageNumber
              key={page}
              $isClicked={clickedPage === page}
              onClick={() => handleClickPage(page)}
            >
              {page}
            </PageNumber>
          );
        })}
        <IcArrowRightSmallGray
          onClick={() => clickedPage !== totalPage && handleClickNextBtn()}
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
