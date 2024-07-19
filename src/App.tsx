import { ThemeProvider } from 'styled-components';
import CommonButton from './common/CommonButton';
import Router from './Router';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
      <CommonButton isActive={true} category="account_create" />
      <CommonButton isActive={false} category="group_create" />
      <CommonButton isActive={false} category="group_direct" />
      <CommonButton category="link_copy" />
      <CommonButton isActive={false} category="group_join" />
    </ThemeProvider>
  );
}

export default App;
