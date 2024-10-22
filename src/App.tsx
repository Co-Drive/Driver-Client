import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EventSourcePolyfill } from 'event-source-polyfill';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import deleteNotification from './libs/apis/SSE/deleteNotification';
import useGetSessionStorage from './libs/hooks/SSE/useGetSessionStorage';
import Router from './Router';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [isConnectedStream, setIsConnectedStream] = useState(false);

  const token = useGetSessionStorage('token');
  const language = useGetSessionStorage('language');
  const isLoginSuccess = token && language !== '사용언어';
  const url = `${import.meta.env.VITE_APP_BASE_URL}/notifications`;

  useEffect(() => {
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

        // 연결 시 할 일
        eventSource.addEventListener('open', () => {
          setIsConnectedStream(true);
        });

        // 연결 후 메시지가 넘어왔을 때 동작
        eventSource.addEventListener('message', (event) => {
          if (event) {
            const response = JSON.parse(event.data);
            const { notificationType } = response;

            if (notificationType && notificationType !== 'CONNECT_START') {
              sessionStorage.setItem('isNewAlarmExit', 'true');
            }

            // 개발 완료되기 전까지 확인용 콘솔
            console.log(notificationType);
          }
        });

        // 연결 중 에러가 발생했을 때 동작
        eventSource.addEventListener('error', (e) => {
          eventSource.close();

          if (isConnectedStream) {
            // 단순히 컴포넌트가 종료되었을 때가 아닌 경우(에러가 발생한 경우)에만 실행
            if (e.target.readyState !== EventSource.CLOSED) {
              deleteNotification();
            }

            // 개발 완료되기 전까지 확인용 콘솔
            else console.log('finish');
          }
        });
      };

      // 초기 연결
      connectSSE();

      // 새로고침 감지 후 연결 해제
      const handleBeforeUnload = () => {
        if (eventSource) {
          // 로그아웃으로 연결을 해지한 경우는 실행되지 않음
          token && deleteNotification();
          eventSource.close();
        }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      // Cleanup 함수로 연결을 닫음
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload); // 새로고침 이벤트 해제
      };
    }
  }, [token, language]);

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
