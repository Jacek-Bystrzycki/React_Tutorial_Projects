import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { GroceryContextProvider } from './context/GroceryContext.tsx';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GroceryContextProvider>
      <App />
    </GroceryContextProvider>
  </StrictMode>
);
