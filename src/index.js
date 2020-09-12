import React from 'react';
import ReactDOM from 'react-dom';
import Chrome from './Chrome';
import { ThemeProvider, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import '@zendeskgarden/css-bedrock';

function App() {
  return (
    <ThemeProvider>
      <Chrome />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
