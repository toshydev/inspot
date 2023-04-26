import { createGlobalStyle } from "styled-components";
import localFont from "next/font/local";

const mPlus1Code = localFont({
  src: "../public/fonts/MPLUS1Code-VariableFont_wght.ttf",
});

export default createGlobalStyle`
:root {
  --logoFont: ${mPlus1Code.style.fontFamily}, sans-serif;
  --accent: #be4bdb;
  --secondary: #fab005;
}

  *, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: system-ui;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

p {
  hyphens: auto;
}

#root, #__next {
  isolation: isolate;
}

`;
