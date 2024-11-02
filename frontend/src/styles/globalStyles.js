// src/globalStyles.js
import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        height: 100vh;
        width: 100vh;
        font-family: ${(props) => props.theme.fonts.main};
        background-color: ${(props) => props.theme.colors.background};
        /* другие глобальные стили */
    }
`;
