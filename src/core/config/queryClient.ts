import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 3,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

export default queryClient;