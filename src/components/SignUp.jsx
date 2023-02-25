import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { auth } from "../firebase";

function SignUp(){
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");
    const onSubmit=async (e)=>{
        e.preventDefault()

        await createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }
    return (
        <>
            <form className="login">
                <h2>Sign Up</h2>
            <div className='input-group'>
                <label htmlFor="email">Email</label>
                <input  type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address" />
                <label htmlFor="password">Password</label>
                <input type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"/>
            </div>
                <button type="submit" onClick={onSubmit} className="login-button">  
                            Sign up                                
                </button>
            
            <p>
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p> 
                    </form>
        </>
    )
}
export default SignUp;