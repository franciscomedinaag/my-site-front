import React from "react";
import ProjectRouter from "./routes";
import AuthProvider from "./context/auth/Provider";
import "react-toastify/dist/ReactToastify.css";

export default function App(){
  return (
    <AuthProvider>
      <ProjectRouter/>
    </AuthProvider>
  )
}