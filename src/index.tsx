import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles';
import { BrowserRouter } from 'react-router-dom';
import { NavApp } from '@components/NavApp';

const App = () => {
  return (
    <NavApp />
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
