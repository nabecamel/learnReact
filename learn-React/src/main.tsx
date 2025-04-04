import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // App.tsx を読み込む
import './styles.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />  {/* Appを画面に描画する */}
  </React.StrictMode>
);