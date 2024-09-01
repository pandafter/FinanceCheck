import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '../styles/index.css'
import { LayoutMain } from '../ui/Layouts/MainLayout'
import { HomePage } from '../ui/pages/HomePage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutMain />,
        children: [
        { index: true, element: <HomePage /> }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
