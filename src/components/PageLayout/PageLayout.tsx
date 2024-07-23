import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../common/Header';
import { PageLayoutProps } from '../../types/PageLayout/PageLayoutType';

const PageLayout = ({ category, children }: PageLayoutProps) => {
  const [clickedCategory, setClickedCategory] = useState(category);

  const handleClickCategory = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const { innerHTML } = e.currentTarget;
    setClickedCategory(innerHTML);
  };

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
  flex-direction: column;
`;
