import ReactDOM from 'react-dom/client';
import './styles';
import { BrowserRouter } from 'react-router-dom';
import { NavApp } from '@components/NavApp';
import { StrictMode } from 'react';

const App = () => {
  return (
    <NavApp />
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
