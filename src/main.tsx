import * as Sentry from '@sentry/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import App from './App.tsx';

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN, // .env 에 넣어준 dns 코드를 가져옵니다.
  integrations: [
    Sentry.reactRouterV6BrowserTracingIntegration({
      // route 가 이뤄질 때 추적합니다.
      useEffect: React.useEffect,
      useLocation,
      useNavigationType,
      createRoutesFromChildren,
      matchRoutes,
    }),
    Sentry.replayIntegration(), // replay 를 이용할 수 있습니다. (사용자 추적)
  ],
  ignoreErrors: [/AxiosError/i], // Axios 기본 오류 무시
  tracesSampleRate: 0.6, // default 는 1이나 너무 민감하므로 실제는 0.6 정도로 낮춥니다.

  tracePropagationTargets: [
    // sentry 를 사용할 도메인 타겟입니다.
    'localhost',
    /^https:\/\/api\.codrive\.co\.kr\/api/,
  ],

  replaysSessionSampleRate: 0.1, // 리플레이를 샘플링할 비율을 설정합니다. 0.1은 100% 중 10% 정도 기록합니다.
  replaysOnErrorSampleRate: 1.0, // 오류가 발생했을 때 세션 리플레이를 기록할 확률을 설정합니다.
});

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

