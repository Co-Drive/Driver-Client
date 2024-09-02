import { css, DefaultTheme } from 'styled-components';

const commonFontStyle = css`
  line-height: 120%;
  letter-spacing: -1%;
`;

const colors = {
  white: '#FFFFFF',
  gray100: '#D8D9DD',
  gray200: '#B2B4BA',
  gray300: '#8B8E98',
  gray400: '#646875',
  gray500: '#494B53',
  gray600: '#34363C',
  gray700: '#292A2F',
  gray800: '#141519',
  gray900: '#0B0C0F',
  green100: '#DCFFE4',
  green200: '#B7FFC7',
  green300: '#7DFF99',
  green400: '#59FF7E',
  purple100: '#F2DDFF',
  purple200: '#E4B8FF',
  purple300: '#CE7DFF',
  alert: '#FF3D55',
  codrive_green: '#08FF3F',
  codrive_purple: '#BF57FF',
  bg: '#0B0C0F',
};

const fonts = {
  // title
  title_bold_46: css`
    font-family: SuitBold;
    font-size: 4.6rem;
    ${commonFontStyle}
  `,

  title_bold_32: css`
    font-family: SuitBold;
    font-size: 3.2rem;
    ${commonFontStyle}
  `,

  title_bold_28: css`
    font-family: SuitBold;
    font-size: 2.8rem;
    ${commonFontStyle}
  `,

  title_bold_26: css`
    font-family: SuitBold;
    font-size: 2.6rem;
    ${commonFontStyle}
  `,

  title_bold_24: css`
    font-family: SuitBold;
    font-size: 2.4rem;
    ${commonFontStyle}
  `,

  title_bold_20: css`
    font-family: SuitBold;
    font-size: 2rem;
    ${commonFontStyle}
  `,

  title_bold_16: css`
    font-family: SuitBold;
    font-size: 1.6rem;
    ${commonFontStyle}
  `,
  title_bold_14: css`
    font-family: SuitBold;
    font-size: 1.4rem;
    ${commonFontStyle}
  `,

  title_semiBold_18: css`
    font-family: SuitSemiBold;
    font-size: 1.8rem;
    ${commonFontStyle}
  `,

  title_semiBold_14: css`
    font-family: SuitSemiBold;
    font-size: 1.4rem;
    ${commonFontStyle}
  `,

  title_medium_24: css`
    font-family: MontserratMedium;
    font-size: 2.4rem;
    ${commonFontStyle}
  `,

  title_medium_20: css`
    font-family: SuitMedium;
    font-size: 2rem;
    ${commonFontStyle}
  `,

  title_regular_20: css`
    font-family: SuitRegular;
    font-size: 2rem;
    ${commonFontStyle}
  `,

  title_regular_14: css`
    font-family: SuitRegular;
    font-size: 1.4rem;
    ${commonFontStyle}
  `,

  title_bold_46: css`
    font-family: SuitBold;
    font-size: 4.6rem;
    ${commonFontStyle}
  `,

  // body
  body_medium_20: css`
    font-family: SuitMedium;
    font-size: 2rem;
    line-height: 120%;
    letter-spacing: -1%;
  `,

  body_medium_16: css`
    font-family: SuitMedium;
    font-size: 1.6rem;
    line-height: 150%;
    letter-spacing: -1%;
  `,

  body_medium_14: css`
    font-family: SuitMedium;
    font-size: 1.4rem;
    ${commonFontStyle}
  `,

  body_ligth_16: css`
    font-family: SuitLight;
    font-size: 1.6rem;
    ${commonFontStyle}
  `,

  body_ligth_12: css`
    font-family: SuitLight;
    font-size: 1.2rem;
    ${commonFontStyle}
  `,

  body_ligth_10: css`
    font-family: SuitLight;
    font-size: 1rem;
    ${commonFontStyle}
  `,

  body_eng_semibold_14: css`
    font-family: MontserratSemibold;
    font-size: 1.4rem;
    ${commonFontStyle}
  `,

  body_eng_medium_16: css`
    font-family: MontserratMedium;
    font-size: 1.6rem;
    ${commonFontStyle}
  `,

  body_eng_medium_12: css`
    font-family: MontserratMedium;
    font-size: 1.2rem;
    ${commonFontStyle}
  `,

  body_eng_regular_14: css`
    font-family: MontserratRegular;
    font-size: 1.4rem;
    ${commonFontStyle}
  `,

  // detail
  detail_regular_12: css`
    font-family: SuitRegular;
    font-size: 1.2rem;
    ${commonFontStyle}
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;
