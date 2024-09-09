import {DefaultOptions, QueryClient} from '@tanstack/react-query';
const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false, // default: true
  },
};

export const queryClient = new QueryClient({defaultOptions: queryConfig});
