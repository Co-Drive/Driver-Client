import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    sentryVitePlugin({
      org: 'rooming-03',
      project: 'javascript-react',
      telemetry: false, // 텔레메트리 데이터 전송 비활성화
      sourcemaps: {
        assets: './dist/**',
        filesToDeleteAfterUpload: './dist/**/*.map', // Sentry에 sourcemap이 업로드된 후에 해당 경로의 파일 제거
      },
    }),
  ],

  server: {
    host: 'localhost',
    port: 3000,
    open: true,
  },

  build: {
    sourcemap: true,
  },
});
