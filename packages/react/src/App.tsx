import './App.css';
import { ReactQueryDevtools } from 'react-query/devtools';
import '@fontsource-variable/inter';
import Home from '@/pages/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
