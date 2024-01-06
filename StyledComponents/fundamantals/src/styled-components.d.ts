import type { CSSProp } from 'styled-components';

//for css prop  to be working (unfortunately dosnt working for now...)
declare module 'react' {
  interface Attributes {
    css?: CSSProp;
  }
}

//for theme to be working
declare module 'style-components' {
  export interface DefaultTheme {
    color: string;
    background: string;
  }
}
