import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .content{
        width: 90%;
        max-width: 750px;
        margin: 0 auto;
    };
    .sticky{
        grid-column: 1 / 2;
        align-self: start;
        top: 1em;
        positon: sticky;
        top: 0;
    };
`;

export default GlobalStyle;