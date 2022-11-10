import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './contexts';
import { GlobalStyles, ResetStyles } from './styles';
import Router from './router';
import { Provider } from 'react-redux';
import { store } from './redux/config/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <Provider store={store}>
        <ResetStyles />
        <GlobalStyles />
        <RouterProvider router={Router} />
      </Provider>
    </ThemeContextProvider>
  </React.StrictMode>
);
