import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from './contexts';
import { GlobalStyles, ResetStyles } from './styles';
import Router from './router';
import { Provider } from 'react-redux';
import { store } from './redux/config/store';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <DndProvider backend={HTML5Backend as any}>
          <ResetStyles />
          <GlobalStyles />
          <RouterProvider router={Router} />
        </DndProvider>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);
