import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'
function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/notes")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
    return (
        <>
            <form className='login'>     
                            <h2>Log in</h2>                                         
                            <div className='input-group'>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div className='input-group'>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button onClick={onLogin} className="login-button">      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
        </>
    )
}
export default Login;