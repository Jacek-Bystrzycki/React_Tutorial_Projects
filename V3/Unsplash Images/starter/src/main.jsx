import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AppProvider } from './context';
import { QueryClientProvider, QueryClient, QueryCache } from '@tanstack/react-query';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.meta?.errorMessage) console.log(query.meta?.errorMessage);
      console.log(error);
    },
  }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AppProvider>
);
