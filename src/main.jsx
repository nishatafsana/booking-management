
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,
} from "react-router-dom";
import { router } from './routes/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
import AuthProvider from './providers/AuthProvider.jsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
 
 <HelmetProvider>
  <QueryClientProvider client={queryClient}>
<AuthProvider>
   <RouterProvider router={router} />
 </AuthProvider>
 <Toaster></Toaster>
 </QueryClientProvider>
 </HelmetProvider>
)
