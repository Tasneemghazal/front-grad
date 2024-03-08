import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './layouts/Routes.jsx'

export default function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
