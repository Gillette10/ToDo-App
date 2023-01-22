import { createGlobalStyle } from "styled-components";

interface LightTheme {
	backgroundColor: string;
	mainBackground: string;
	color: string;
}
interface DarkTheme {
	backgroundColor: string;
	mainBackground: string;
	color: string;
}

export const GlobalStyle = createGlobalStyle<{ theme: LightTheme | DarkTheme }>`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  #root {
    margin: 0 auto;
  }

  body {
    background-color: ${({ theme }) => theme.mainBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease;
  }
`;
