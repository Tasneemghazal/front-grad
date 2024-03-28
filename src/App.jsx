import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./layouts/Routes.jsx";
import DepartmentContextProvider from "./components/context/DepartmentContextProvider.jsx";
import StudentContextProvider from "./components/context/StudentContextProvider.jsx";
import UserContextProvider from "./components/context/UserContextProvider.jsx";
import ProjectContextProvider from "./components/context/ProjectContextProvider.jsx";
import SnackbarProvider from "./components/context/SnackbarProvider.jsx";
import SectionContextProvider from "./components/context/SectionContextProvider.jsx";
import RequestContextProvider from "./components/context/RequestContextProvider.jsx";
import TaskContextProvider from "./components/context/TaskContextProvider.jsx";

export default function App() {
  return (
    <TaskContextProvider>
      <RequestContextProvider>
        <SectionContextProvider>
          <SnackbarProvider>
            <ProjectContextProvider>
              <UserContextProvider>
                <StudentContextProvider>
                  <DepartmentContextProvider>
                    <RouterProvider router={router} />
                  </DepartmentContextProvider>
                </StudentContextProvider>
              </UserContextProvider>
            </ProjectContextProvider>
          </SnackbarProvider>
        </SectionContextProvider>
      </RequestContextProvider>
    </TaskContextProvider>
  );
}
