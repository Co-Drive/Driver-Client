import { createGlobalStyle, css } from 'styled-components';
import MontserratMedium from './fonts/Montserrat/Montserrat-Medium.ttf';
import MontserratRegular from './fonts/Montserrat/Montserrat-Regular.ttf';
import MontserratSemibold from './fonts/Montserrat/Montserrat-SemiBold.ttf';
import SuitBold from './fonts/Suit/SUIT-Bold.ttf';
import SuitLight from './fonts/Suit/SUIT-Light.ttf';
import SuitMedium from './fonts/Suit/SUIT-Medium.ttf';
import SuitRegular from './fonts/Suit/SUIT-Regular.ttf';
import SuitSemiBold from './fonts/Suit/SUIT-SemiBold.ttf';

export const reset = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  menu,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    padding: 0;
    margin: 0;

    border: 0;
    font-size: 62.5%; /* 1rem = 0.1px */

    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  body {
    line-height: 1;
  }

  menu,
  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote::before,
  blockquote::after,
  q::before,
  q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;
export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: MontserratSemibold;
  font-style: normal;
  src: url(${MontserratSemibold}) format('truetype');
}


@font-face {
  font-family: MontserratMedium;
  font-style: normal;
  src: url(${MontserratMedium}) format('truetype');
}

@font-face {
  font-family: MontserratRegular;
  font-style: normal;
  src: url(${MontserratRegular}) format('truetype');
}

@font-face {
  font-family: SuitBold;
  font-style: normal;
  src: url(${SuitBold}) format('truetype');
}

@font-face {
  font-family: SuitSemiBold;
  font-style: normal;
  src: url(${SuitSemiBold}) format('truetype');
}

@font-face {
  font-family: SuitMedium;
  font-style: normal;
  src: url(${SuitMedium}) format('truetype');
}

@font-face {
  font-family: SuitRegular;
  font-style: normal;
  src: url(${SuitRegular}) format('truetype');
}

@font-face {
  font-family: SuitLight;
  font-style: normal;
  src: url(${SuitLight}) format('truetype');
}



${reset}


#root, body, html {
    margin: 0 auto;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */

    background-color: ${({ theme }) => theme.colors.bg};
}

#root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
}

* {
    box-sizing: border-box;
}

/* 사파리 웹 뷰 브라우저 상속 스타일 제거 */
input, textarea,button {
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
}

input:disabled, textarea:disabled, input:disabled::placeholder, textarea:disabled::placeholder {
    opacity: 1; 
}


`;
