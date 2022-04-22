import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    breakpoints: {
      mobile: number;
      desktop: number;
    };
    spacing: Array<string>;
    colors: {
      black: string;
      gray: string;
      yellow: string;
      white: string;
      lightGray: string;
    };
  }
}
