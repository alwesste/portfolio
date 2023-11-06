import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { ThemeProvider } from './components/utils/ThemeContext.tsx';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.tsx';
// import { ThemeProvider } from './components/utils/ThemeContext.tsx';


// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>  
//   </React.StrictMode>,
//   document.getElementById('root')
// );
