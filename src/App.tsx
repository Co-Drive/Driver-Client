import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EventSourcePolyfill } from 'event-source-polyfill';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import deleteNotifications from './libs/apis/SSE/deleteNotifications';
import Router from './Router';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const token = sessionStorage.getItem('token');
  const language = sessionStorage.getItem('language');
  const isLoginSuccess = token && language !== '사용언어';
  const url = `${import.meta.env.VITE_APP_BASE_URL}/notifications`;

  useEffect(() => {
    if (isLoginSuccess) {
      let eventSource: EventSourcePolyfill;

      const connect = () => {
        eventSource = new EventSourcePolyfill(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          heartbeatTimeout: 72 * 100 * 1000,
        });

        eventSource.addEventListener('message', (event) => {
          if (event) {
            const response = JSON.parse(event.data);
            const { notificationType } = response;

            console.log(notificationType);
          }
        });

        eventSource.addEventListener('error', (event) => {
          console.error('Error:', event);
          eventSource.close();
          deleteNotifications(connect);
        });
      };

      connect();

      // Cleanup 함수로 연결을 닫음
      return () => {
        eventSource.close();
        deleteNotifications(connect);
      };
    }
  }, [isLoginSuccess]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
