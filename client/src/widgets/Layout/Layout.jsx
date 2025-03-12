import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from "react-router";


export default function Layout() {
  return (
    <>
          <NavBar />
          <Outlet />
    </>
  );
}