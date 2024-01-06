import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --white: #fff;
  --primary-color: #645cff;
  --mainBorder: 1px solid red;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f2f4fb;
}
`;

export default GlobalStyles;
