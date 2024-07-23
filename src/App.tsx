import { ThemeProvider } from 'styled-components';
import PageLayout from './components/PageLayout/PageLayout';
import Router from './Router';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      <PageLayout children={null} />
    </ThemeProvider>
  );
}

export default App;
