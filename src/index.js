import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // из-за этой штуки компонент 2 раза отрисовываетя
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

