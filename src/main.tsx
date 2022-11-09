import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './contexts';
import { GlobalStyles, ResetStyles } from './styles';
import Router from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ResetStyles />
      <GlobalStyles />
      <RouterProvider router={Router} />
    </ThemeContextProvider>
  </React.StrictMode>
);
