import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = styled.body`
  color: black;
`;

export const GlobalStyle = createGlobalStyle`
  body{
    position: relative;
    align-items: center;
    text-align: center;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.foregroundColor};
  }

  button{
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.foregroundColor};
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    border: 2px solid ${(props) => props.foregroundColor};
  }

  button:focus{
    outline:0;
  }
`;
