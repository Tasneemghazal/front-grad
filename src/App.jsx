import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './layouts/Routes.jsx'
import DepartmentContextProvider from './components/context/DepartmentContextProvider.jsx'
import StudentContextProvider from './components/context/StudentContextProvider.jsx'
import UserContextProvider from './components/context/UserContextProvider.jsx'
import ProjectContextProvider from './components/context/ProjectContextProvider.jsx'

export default function App() {
  return (
    <ProjectContextProvider>
    <UserContextProvider>
    <StudentContextProvider>
    <DepartmentContextProvider>
    <RouterProvider router={router}/>
    </DepartmentContextProvider>
    </StudentContextProvider>
    </UserContextProvider>
    </ProjectContextProvider>
  )
}
