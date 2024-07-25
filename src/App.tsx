import { ThemeProvider } from 'styled-components';
import GroupComplete from './page/GroupComplete';
import Router from './Router';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      <GroupComplete />
    </ThemeProvider>
  );
}

export default App;
