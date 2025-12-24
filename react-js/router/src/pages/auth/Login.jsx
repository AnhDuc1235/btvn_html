import React, { useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
// import { isAuth } from "../auth/Login"

const LoginData = {
    email: "demo@gmail.com",
    password: "123456",
}
export default function Login() {
    // const location = useLocation()
    const [email, setEmail] =useState(LoginData.email)
    const [password, setPassword] =useState(LoginData.password)
    const Navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const continueUrl = searchParams.get("continue") ?? "/"
    
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email,password);
        // localStorage.setItem("email", email)
        if (email === LoginData.email && password === LoginData.password) {
            localStorage.setItem("isAuth", true)
            Navigate(continueUrl)
        }

    }
  return (
    <div>
        <h1>login</h1>
        <form>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='email...' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password...'
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={(e) => handleLogin(e)}>Login</button>
        </form>
    </div>
  )
}
