import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../common/Header';
import { PageLayoutProps } from '../../types/PageLayout/PageLayoutType';
import { movePagePosition } from '../../utils/movePagePosition';

const PageLayout = ({ category, children }: PageLayoutProps) => {
  const navigate = useNavigate();
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
        return navigate('/');
    }
  };

  const handleClickCategory = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setClickedCategory(innerHTML);

    handleEarlyNavigate(innerHTML);
  };

  useEffect(() => {
    movePagePosition();
  }, []);

  return (
    <PageLayoutContainer>
      <Header
        clickedCategory={clickedCategory}
        handleClickCategory={handleClickCategory}
      />
      {clickedCategory === category && children}
    </PageLayoutContainer>
  );
};

export default PageLayout;

const PageLayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;
