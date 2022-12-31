import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import Register from "../views/Register";
import Login from "../views/Login";
import Admin from "../views/Admin";
import Home from "../views/Home";
import ErrorPage from "../views/404";

export default function ProjectRouter(){
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/admin" exact element={<Admin />} />
                <Route path="/login" exact element={<Login />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}