import React, {useState} from "react";
import { useDispatch } from "react-redux"
import { login } from "../store/authSlice"

export default function LoginForm() {
    const [ username, setUsername ] = useState("")
    const dispatch = useDispatch()

    const handleLogin = () => {
        if (username.trim() !== "") {
            dispatch(login({name:username}))
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Name?"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin} >
                Login
            </button>
        </div>
    )
}