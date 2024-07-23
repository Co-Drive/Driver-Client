import React, { useState } from 'react';
import Header from '../../common/Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const isLogin = true;
  const [clickedCategory, setClickedCategory] = useState(isLogin ? '홈' : '');

  const handleClickCategory = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    setClickedCategory(e.currentTarget.innerHTML);
  };

  return (
    <>
      {isLogin ? (
        <Header
          isLogin={isLogin}
          clickedCategory={clickedCategory}
          handleClickCategory={handleClickCategory}
          nickname={'매링구'}
        />
      ) : (
        <Header isLogin={isLogin} handleClickCategory={handleClickCategory} />
      )}
      {children}
    </>
  );
};

export default PageLayout;
