import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import TotalMain from "../components/mainPage/totalMain/TotalMain.jsx";
import TechnicalSupport from "../components/mainPage/technicalSupport/TechnicalSupport.jsx";
import PageNotFound from "../components/pageNotFound/PageNotFound.jsx";
import Sign_in from "../components/sign in/Sign_in.jsx";
import HODSection from '../components/HeadOD/Head2/HODSection.jsx'
import DashLayout from "./DashLayout.jsx";
import Home from "../components/dashboard/home/Home.jsx";
import Create from "../components/dashboard/create/Create.jsx";
import HeadOfDepartments from "../components/dashboard/departmentsHeads/headOfDepartments.jsx";
import Supervisor from "../components/dashboard/supervisors/Supervisor.jsx";
import Students from "../components/dashboard/student/Students.jsx";
import Projects from "../components/dashboard/projects/Projects.jsx";
import Mail from "../components/dashboard/mail/Mail.jsx";
import CreatProject from "../components/dashboard/projects/CreatProject.jsx";
import AllProjects from "../components/dashboard/projects/AllProjects.jsx";
import ViewProject from "../components/dashboard/projects/ViewProject.jsx";
import StudentLayout from "./StudentLayout.jsx";
import TotalStudent from "../components/student/TotalStudent.jsx";
import SendCode from "../components/sendCode/SendCode.jsx";
import ForgotPassword from "../components/forgotPassword/ForgotPassword.jsx";
import TotalSupervisor from "../components/Supervisor/TotalSupervisor.jsx";
import Profile from "../components/student/profile/Profile.jsx";
import SupervisorLayout from "./SupervisorLayout.jsx";
import HeadLayout from "./HeadLayout.jsx";
import TotalHead from './../components/HeadOD/TotalHead.jsx'
import AddTask from "../components/Supervisor/supervisor_2/AddTask.jsx";
import EditTask from "../components/Supervisor/supervisor_2/EditTask.jsx";
import EditProfile from "../components/student/profile/EditProfile.jsx";
import AllProfile from "../components/student/profile/AllProfile.jsx";
import CreateStudent from "../components/dashboard/create/CreateStudent.jsx";
import Department from "../components/dashboard/departmet/Department.jsx";
import EditUser from "../components/shared/EditUser.jsx";
import EditStudents from "../components/dashboard/student/EditStudents.jsx";
import SectionRegistration from "../components/student/Booking/SectionRegistration.jsx";
import SubmitTask from "../components/student/student_2/SubmitTask.jsx";
import EditStudentTask from "../components/student/student_2/EditStudentTask.jsx";
import ChatApp from "../components/ChatApp/ChatApp.jsx";
import ProtectedRoutes from "../components/shared/ProtectedRoutes.jsx";
import UpdatePassword from "../components/forgotPassword/UpdatePassword.jsx";
<<<<<<< HEAD
=======
import ChatAppSupervisor from "../components/ChatApp/ChatAppSupervisor.jsx";
>>>>>>> f1f1f5edf3f0933400417f89ed15ea801cd48c39
const handleGoBack = () => {
  window.history.back();
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TotalMain />,
      },
      {
        path: "home",
        element: <TotalMain />,
      },
      {
        path: "sign-in",
        element: <Sign_in />,
      },
      {
        path: "sendCode",
        element: <SendCode />,
      },
      {
        path: "forgotPassword",
        element: <ForgotPassword />,
      },
      {
        path: "updatePassword",
        element: <UpdatePassword />,
      },
      {
        path: "technical-support",
        element: <TechnicalSupport />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: 
    <ProtectedRoutes>
        <DashLayout />
    </ProtectedRoutes>
  
    ,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "createUser",
        element: <Create />,
      },
      {
        path: "createStudent",
        element: <CreateStudent />,
      },
      {
        path: "department",
        element: <Department />,
      },
      {
        path: "departmentheads",
        element: <HeadOfDepartments />,
      },
      {
        path: "departmentheads/:id",
        element: <EditUser />,
      },
      {
        path: "supervisors",
        element: <Supervisor />,
      },
      {
        path: "supervisors/:id",
        element: <EditUser />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "students/:id",
        element: <EditStudents />,
      },
      {
        path: "projects",
        element: <AllProjects />,
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: "addProject",
            element: <CreatProject />,
          },
          {
            path: "viewProjects",
            element: <ViewProject />,
          },
        ],
      },
      {
        path: "mail",
        element: <Mail />,
      },
    ],
  },
  {
    path: "/student",
    element: 
    <ProtectedRoutes>
      <StudentLayout />
    </ProtectedRoutes>
    ,
    children: [
      { index: true, element: <TotalStudent /> },
      {
        path: "home",
        element: <TotalStudent />,
      },
      {
        path:"submitTask/:sectionId/:taskId",
        element:<SubmitTask title={"Submit Your Task"}/>
      },
      {
        path:"editTask/:sectionId/:taskId",
        element:<EditStudentTask title={"Edit Your Submission"}/>
      },
      {
        path: "profile",
        element: <AllProfile />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "editProfile",
            element: <EditProfile role={"student"} />,
          },
        ],
      },
    {
        path: "section-booking", 
        element: <SectionRegistration />, 
      },
      {
        path:"chat",
        element:<ChatApp/>
      }
    ],  
  },
  {
    path: "/supervisor",
    element: 
    <ProtectedRoutes>
      <SupervisorLayout />
    </ProtectedRoutes>
    
    ,
    children: [
      { index: true, element: <TotalSupervisor /> },
      {
        path: "home",
        element: <TotalSupervisor />,
      },
      {
        path: "addtask",
        element: <AddTask title={"Add a new task"} />,
      },
      {
        path: "editTask/:id",
        element: <EditTask />,
      },
      {
        path: "profile",
        element: <AllProfile />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "editProfile",
            element: <EditProfile role={"supervisor"} />,
          },
        ],
      },
      {
        path:"sections",
        element:<HODSection/>,
      },
      {
            path: "sections/chat",
            element: <ChatAppSupervisor/>
          }
    ],
  },
  {
    path: "/headOfDepartment",
    element: 
    <ProtectedRoutes>
       <HeadLayout />
    </ProtectedRoutes>
   
    ,
    children: [
      {
        index: true,
        element: <TotalHead />,
      },
      {
        path: "profile",
        element: <AllProfile />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "editProfile",
            element: <EditProfile role={"head"} />,
          }
        ],
      },
      {
        path:"sections",
        element:<HODSection/>,
      },
      {
            path: "sections/chat",
            element: <ChatAppSupervisor/>
          }
    ],
  },
  {
    path: "*",
    element: <PageNotFound onGoBack={handleGoBack} />,
  },
]);
