import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
   <>
   <RouterProvider router={router} />
   <Toaster />
   </>
)
