import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Footer from '../../common/Footer';
import Header from '../../common/Header';
import { PageLayoutProps } from '../../types/PageLayout/PageLayoutType';
import { movePagePosition } from '../../utils/movePagePosition';
import {
  removeSavedPage,
  removeSavedSorting,
} from '../../utils/removeSavedPage';

const PageLayout = ({
  category,
  children,
  isDisabledFooter,
}: PageLayoutProps) => {
  const navigate = useNavigate();
  const nickname = sessionStorage.getItem('nickname');
  const profileImg = sessionStorage.getItem('profileImg');
  const language = sessionStorage.getItem('language');
  // isLoginSuccess를 불린 값으로 정의
  const isLoginSuccess = !!(nickname && profileImg && language !== '사용언어');
  const [clickedCategory, setClickedCategory] = useState(category);

  const handleEarlyNavigate = (clickedNav: string) => {
    switch (clickedNav) {
      case '홈':
        return navigate('/');
      case '문제풀이':
        return navigate('/solve');
      case '그룹':
        return navigate('/group');
      default:
        return navigate('/login');
    }
  };

  const handleClickCategory = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setClickedCategory(innerHTML);
    handleEarlyNavigate(innerHTML);
    removeSavedSorting();
    removeSavedPage();
  };

  useEffect(() => {
    movePagePosition();
  }, []);

  return (
    <PageLayoutContainer $isNotLandingPage={isLoginSuccess}>
      <Header
        clickedCategory={clickedCategory}
        handleClickCategory={handleClickCategory}
      />
      {clickedCategory === category && children}
      {!isDisabledFooter && <Footer />}
    </PageLayoutContainer>
  );
};

export default PageLayout;

const PageLayoutContainer = styled.div<{ $isNotLandingPage: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

  width: 100%;
  ${({ $isNotLandingPage }) =>
    $isNotLandingPage &&
    css`
      padding-top: 11.5rem;
    `};
`;
