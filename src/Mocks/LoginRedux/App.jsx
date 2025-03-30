import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

export default function ReduxLogin() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    return (
        <div style={{padding:"20px"}}>
            <h1>Redux practice</h1>
            {isAuthenticated?<Dashboard/>:<LoginForm/>}
        </div>
    )
}