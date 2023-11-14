import React from 'react';
import App from './App.tsx';
import { ThemeProvider } from './components/utils/ThemeContext.tsx';
import { createRoot } from 'react-dom/client';
const rootElement: Element | null = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error('Element with id "root" not found in the document');
}
