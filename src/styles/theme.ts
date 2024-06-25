import { css } from 'styled-components';

const colors = {
  // 아래 형식으로 정의
  white: '#FFFFFF',
};

const fonts = {
  // 아래 형식으로 정의
  h1: css`
    font-family: 'Pretendard';
    font-size: 3.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 5.7rem;
    letter-spacing: -0.04rem;
  `,
};

const theme = {
  colors,
  fonts,
};
export default theme;
