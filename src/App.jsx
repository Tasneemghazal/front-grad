import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './layouts/Routes.jsx'
import DepartmentContextProvider from './components/context/DepartmentContextProvider.jsx'

export default function App() {
  return (
    <DepartmentContextProvider>
    <RouterProvider router={router}/>
    </DepartmentContextProvider>
  )
}
