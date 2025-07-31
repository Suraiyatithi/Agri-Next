// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import './index.css'
// import App from './App.jsx'
// import Main_layout from './layout/Main_layout.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main_layout></Main_layout>,
//   },
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

import './i18n.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
            <QueryClientProvider client={queryClient}>

   <div className="max-w-screen-xl mx-auto">
   <RouterProvider router={router} />
   </div>
   </QueryClientProvider>
   </AuthProvider>
  </StrictMode>,
)