import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: auto;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  border-radius: 16px;
}

::-webkit-scrollbar-track-piece {
  background-color: #ffffff;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: #22202c;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: #22202c;
  border-radius: 3px;
}
`;
