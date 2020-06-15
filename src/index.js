import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './components/styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import { Theme } from './components/styles/theme'

const root = document.getElementById('root')

ReactDOM.render(
  <>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>
  , root
);

