import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './common/Header';
import Router from './Router';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';

function App() {
  const isLogin = true;
  const [clickedCategory, setClickedCategory] = useState(isLogin ? '홈' : '');

  const handleClickCategory = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    setClickedCategory(e.currentTarget.innerHTML);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      <Header
        isLogin={isLogin}
        nickname={'매링구'}
        clickedCategory={clickedCategory}
        handleClickCategory={handleClickCategory}
      />
    </ThemeProvider>
  );
}

export default App;
