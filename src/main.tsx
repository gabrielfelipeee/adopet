import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes.tsx';
import './styles/index.css';
import './styles/layout.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
