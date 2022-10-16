import React from 'react';
import LeftMenu from "../leftmenu/LeftMenu";
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
        <LeftMenu />
        <GlobalStyle />
        <TodoTemplate>안녕하세요</TodoTemplate>
    </>
  );
}

export default App;