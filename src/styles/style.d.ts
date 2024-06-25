import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      // 아래 형식처럼 정의
      white: string;
    };

    fonts: {
      // 아래 형식처럼 정의
      h1: SerializedStyles;
    };
  }
}
