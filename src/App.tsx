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
    console.log(token, language);
    if (isLoginSuccess) {
      let eventSource: EventSourcePolyfill;

      const connectSSE = () => {
        eventSource = new EventSourcePolyfill(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // 연결 주기를 2시간으로 설정
          heartbeatTimeout: 72 * 100 * 1000,
        });

        // 개발 완료되기 전까지 확인용 콘솔
        eventSource.addEventListener('open', () => {
          console.log('open');
        });

        // 연결 후 메시지가 넘어왔을 때 동작
        eventSource.addEventListener('message', (event) => {
          if (event) {
            const response = JSON.parse(event.data);
            const { notificationType } = response;

            if (notificationType && notificationType !== 'CONNECT_START')
              sessionStorage.setItem('isNewAlarmExit', 'true');

            // 개발 완료되기 전까지 확인용 콘솔
            console.log(notificationType);
          }
        });

        // 연결 중 에러가 발생했을 때 동작
        eventSource.addEventListener('error', () => {
          eventSource.close();
          deleteNotifications(connectSSE);
        });
      };

      // 초기 연결
      connectSSE();

      // Cleanup 함수로 연결을 닫음
      return () => {
        eventSource.close();
        deleteNotifications(connectSSE);
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
