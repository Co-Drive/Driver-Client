import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray400: string;
      gray500: string;
      gray600: string;
      gray700: string;
      gray800: string;
      gray900: string;
      green100: string;
      green200: string;
      green300: string;
      green400: string;
      purple100: string;
      purple200: string;
      bg: string;
      alert: string;
      codrive_purple: string;
      codrive_green: string;
    };

    fonts: {
      // title
      title_bold_50: SerializedStyles;
      title_bold_46: SerializedStyles;
      title_bold_32: SerializedStyles;
      title_bold_28: SerializedStyles;
      title_bold_26: SerializedStyles;
      title_bold_24: SerializedStyles;
      title_bold_20: SerializedStyles;
      title_bold_16: SerializedStyles;
      title_bold_14: SerializedStyles;
      title_semiBold_18: SerializedStyles;
      title_semiBold_14: SerializedStyles;
      title_medium_24: SerializedStyles;
      title_medium_20: SerializedStyles;
      title_regular_20: SerializedStyles;
      title_regular_14: SerializedStyles;
      title_bold_46: SerializedStyles;

      // body
      body_medium_20: SerializedStyles;
      body_medium_16: SerializedStyles;
      body_medium_14: SerializedStyles;
      body_ligth_16: SerializedStyles;
      body_ligth_12: SerializedStyles;
      body_ligth_10: SerializedStyles;
      body_eng_semibold_14: SerializedStyles;
      body_eng_medium_16: SerializedStyles;
      body_eng_medium_12: SerializedStyles;
      body_eng_regular_14: SerializedStyles;

      // detail
      detail_regular_12: SerializedStyles;
    };
  }
}
