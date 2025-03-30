import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../store/authSlice"

export default function Dashboard() {
    const user = useSelector((state) => state.auth.user)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Hello, {user.name} </h2>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}