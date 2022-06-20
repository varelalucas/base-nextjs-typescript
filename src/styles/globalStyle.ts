import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html, body {
    background-color: #121214;
    color: #e1e1e6;
    overflow-x: hidden;
  }

  *::-webkit-scrollbar, *::-webkit-scrollbar {
    width: 3px;
    height: 0;
    background-color: #222;
    overflow: visible;
  }

  *::-webkit-scrollbar-thumb, *::-webkit-scrollbar-thumb {
    background: #22e562;
  }

  *::-webkit-scrollbar-button, *::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  
  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`
