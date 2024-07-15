import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // 아래 형식처럼 정의
      white: string;
    };

    fonts: {
      title_bold_32: SerializedStyles;
      title_bold_24: SerializedStyles;
      title_medium_24: SerializedStyles;
      title_bold_20: SerializedStyles;
    };
  }
}
