import { createGlobalStyle } from 'styled-components';
import background from '../assets/plantbackground.jpg';

export default createGlobalStyle`
    body {
        background: #ffffff url(${background}) no-repeat top;
        background-position-y: -29rem;
        color: #0f2d24;
        font-family: 'Roboto', sans-serif;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;