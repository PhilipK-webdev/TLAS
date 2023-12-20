import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body{
    font-family:'Almoni', Ariel, serif;
    height:100%;
    font-size:18px;
    padding:0;
    margin:0;
}

html{
    box-sizing:border-box;
}

*,*::before, *::after{
 box-sizing:inherit
}
`;

export default GlobalStyles;
