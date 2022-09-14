import { QueryClientProvider } from '@tanstack/react-query';
import { useRoutes } from 'react-router-dom';
import { getClient } from './queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { routes } from './routes';

export default function App() {
  const elem = useRoutes(routes);
  const queryClient = getClient();

  return (
    <QueryClientProvider client={queryClient}>
      {elem}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
