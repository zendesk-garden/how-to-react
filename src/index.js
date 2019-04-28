import React from 'react';
import ReactDOM from 'react-dom';
import Chrome from './Chrome';
import { ThemeProvider } from '@zendeskgarden/react-theming';

import './styles';

function App() {
  return (
    <ThemeProvider>
      <Chrome />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
