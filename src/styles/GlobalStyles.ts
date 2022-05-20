import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

};

body{
    font-family: 'Rubik', sans-serif;
    

}

ul{
    list-style: none;

}

a{
    color: ${({theme}) => theme.color.text};
    text-decoration: none;
}

`;
