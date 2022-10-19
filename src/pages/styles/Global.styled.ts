import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    background-color: #f5f5f5;
    background-size: 40px 40px;
    background-image: radial-gradient(circle, #c5c5c5 1px, rgba(0, 0, 0, 0) 1px);
}

#app {
    max-width: 1400px;
    margin: 0 auto;
}

`;

export default GlobalStyles;
