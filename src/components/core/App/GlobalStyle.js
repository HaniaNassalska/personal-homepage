import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: "Inter", sans-serif;
    word-break: break-word;
    transition: 0.3s;
  }
  `;
