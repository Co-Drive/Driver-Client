import { ThemeProvider } from 'styled-components';
import GroupCreate from './page/GroupCreate';
import Router from './Router';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      <GroupCreate />
    </ThemeProvider>
  );
}

export default App;
