import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 
  :root {
    --color-background: #f1ecec;
    --color-border: #ddd;
    --color-primary: #51a7d6;
    --color-primary-light: #54acda;
    --color-primary-dark: #315e85;  
    --color-secundary: #a282b3;
    --color-secundary-light: #cf99d2;
    --color-secundary-dark: #675f8e;
    --color-success: #03ab1a;
    --color-warning: #ee4e32;
    --color-text-base: #272727;
    --color-silver: #ddd;
  }
  #root {
    /* Y */
    align-items: center;
    /* X */
    justify-content: center;
  }
  body,
  input,
  button,
  textarea {
    color: var(--color-text-base);
  }
  *{
    margin:0;
    padding: 0%;
    outline:0;
    box-sizing: border-box;
    text-decoration: none;
  }
  html, body, #root{
    height: 100%;
    font: 14px 'Roboto', sans-serif;
  }
  body{
    background: var(--color-background);
    color: var(--color-text-base);
    font-weight: 400;
    -webkit-font-smoothing: antialiased !important
  }
  ul li{
    list-style: nome
  }
  h1,h2,h3,h4,h5,h6{
      font-weight: bold;
      color: var(--color-primary-dark);
  }
  a{
    text-decoration:none;
    cursor: pointer;
    color:(--color-secundary-dark);
    &:hover{
      color:(--color-primary);
      text-decoration:underline
    }
    &:active,&:visited{

      text-decoration:none;
    }
  }
  .icon-help{
    color: var(--color-primary-dark);
    margin-left: 10px;
    &:hover{            
      color: var(--color-primary);
    }
  }
  .color-success{
    color:var(--color-success);
  }
  .color-warning{
    color:var(--color-warning);
  }
  .success{
    background-color:var(--color-success) !important;
    &:hover{
      opacity: 0.9;
    }
  }
  .warning{
    background-color:var(--color-warning) !important;
    &:hover{
      opacity: 0.9;
    }
  }
  /* PADRAO DE INPUTS */
  fieldset {
    min-inline-size: auto;
    border: 0;
  }

  .field {
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    label {
      padding-bottom: 8px;
    }
  }
  .field-inline {
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    label {
      padding-left: 8px;
    }
  }
  .checkbox-group {
    padding: 8px 10px;
    display: flex;
    justify-content: start;
    align-items: center;
    label {
      padding-left: 10px;
    }
  }
  input,
  select,
  textarea {
    background-color: var(--color-background);
    color: #575555;
    border: solid 1px var(--color-border);
    height: 30px;
    border-radius: 3px;
    padding-left: 10px;
    font: 14px 'Roboto', sans-serif;
  }
  textarea{
    padding: 10px;
    height: 100px;
    resize:none;
  }
  input:focus,
  select:focus,
  textarea:focus {
    border: 1px solid #3a79b0;
  }
  input:disabled,
  select:disabled,
  textarea:disabled {
    cursor: no-drop;
    opacity: 0.8;
  }
  .button, .button-active {
    padding: 8px;
    background-color: var(--color-primary);
    color: #fff;
    border: none;
    height: 35px;
    display:flex;
    align-items: center;
    justify-content:center;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
    &:active {
      opacity: 1;
    }    
  }
  .button-active{
      background: var(--color-primary-dark)
  }

  /*BARRA DE ROLAGEM*/
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
   
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment  {
    display: none;
  }
   
  ::-webkit-scrollbar-track-piece  {
    background-color: #fff;
  }
   
  ::-webkit-scrollbar-thumb:vertical {
    background-color: #cacaca;
    
  }::-webkit-scrollbar-thumb:horizontal {
    background-color: #cacaca;
  }
`;
