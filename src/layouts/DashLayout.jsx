import React, { useState } from 'react'
import SideBar from '../components/dashboard/sideBar/SideBar.jsx' 
import Navbar from '../components/dashboard/navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom';
export default function DashLayout() {
  const [noneOrBlock,setNoneOrBlock] =useState("none");
  const[drawerType,setDrawerType] = useState("permanent");
  const showDrawer = ()=>{
    setDrawerType("temporary");
    setNoneOrBlock("block");
  }
  const hideDrawer = ()=>{
    setDrawerType("permanent");
    setNoneOrBlock("none");
  }
  return (
    <>
    <Navbar showDrawer={showDrawer}/>
    <SideBar noneOrBlock={noneOrBlock} drawerType={drawerType} hideDrawer={hideDrawer}/>
    <Outlet/>
    </>
  )
}
