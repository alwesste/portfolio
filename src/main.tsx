// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
// import { ThemeProvider } from './components/utils/ThemeContext.tsx';

// const rootElement = document.getElementById('root');

// if (rootElement) {
//   ReactDOM.createRoot(rootElement).render(
//     <React.StrictMode>
//       <ThemeProvider>
//         <App />
//       </ThemeProvider>
//     </React.StrictMode>
//   );
// } else {
//   console.error("Element with ID 'root' not found in the DOM.");
// }


import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App.tsx';
import { ThemeProvider } from './components/utils/ThemeContext.tsx';


// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>  
//   </React.StrictMode>,
//   document.getElementById('root')
// );

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
