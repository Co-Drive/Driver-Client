import { ThemeProvider } from 'styled-components';
import GroupJoin from './page/GroupJoin';
import Router from './Router';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      <GroupJoin />
    </ThemeProvider>
  );
}

export default App;
