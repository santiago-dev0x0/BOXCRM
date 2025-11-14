import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import router from './routes/route.tsx';
import './styles/index.css';

async function enableMockServiceWorker() {
  if (!import.meta.env.DEV) return;
  const { worker } = await import('./mocks/browser.ts');

  console.log(`🧩 Mocking enabled in ${import.meta.env.MODE}`);

  await worker.start({
    serviceWorker: {
      url: '/mockServiceWorker.js',
    },
    onUnhandledRequest: 'bypass',
  });
}

function startApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) throw new Error('Root element not found');

  const queryClient = new QueryClient();

  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>
  );
}

enableMockServiceWorker()
  .then(startApp)
  .catch((error) => console.error(error));
