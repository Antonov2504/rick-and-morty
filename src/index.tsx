import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles';

const App = () => {
  return (
    <h1>Rick and Morty</h1>
  );
};

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
