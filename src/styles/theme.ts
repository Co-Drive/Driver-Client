import { css, DefaultTheme } from 'styled-components';

const commonFontStyle = css`
  line-height: 120%;
  letter-spacing: -1%;
`;

const colors = {
  // 아래 형식으로 정의
  white: '#FFFFFF',
};

const fonts = {
  title_bold_32: css`
    font-family: SuitBold;
    font-size: 3.2rem;
    ${commonFontStyle}
  `,

  title_bold_24: css`
    font-family: SuitBold;
    font-size: 2.4rem;
    ${commonFontStyle}
  `,

  title_medium_24: css`
    font-family: MontserratMedium;
    font-size: 2.4rem;
    ${commonFontStyle}
  `,

  title_bold_20: css`
    font-family: SuitBold;
    font-size: 2rem;
    ${commonFontStyle}
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
