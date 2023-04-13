import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Outlet } from "react-router-dom";


export default () => {
    const {isAuthenticated} = useAuth();

    return isAuthenticated ? <Outlet /> : "Protected route, please sign in!"
}