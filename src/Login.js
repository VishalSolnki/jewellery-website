// import React, { useState } from 'react';
// import './Login.css'
// import { Link, useHistory } from "react-router-dom";
// import { auth } from "./firebase";

// function Login() {
//     const history = useHistory();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const signIn = e => {
//         e.preventDefault();

//         auth
//             .signInWithEmailAndPassword(email, password)
//             .then(auth => {
//                 history.push('/')
//             })
//             .catch(error => alert(error.message))
//     }

//     const register = e => {
//         e.preventDefault();

//         auth
//             .createUserWithEmailAndPassword(email, password)
//             .then((auth) => {
//                 // it successfully created a new user with email and password
//                 if (auth) {
//                     history.push('/')
//                 }
//             })
//             .catch(error => alert(error.message))
//     }
        
    

//     return (
//         <div className='login'>
//             <Link to='/'>
//                 <img
//                     className="login__logo"
//                     src='logo.png' 
//                 />
//             </Link>

//             <div className='login__container'>
//                 <h1>Sign-in</h1>

//                 <form>
//                     <h5>E-mail</h5>
//                     <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

//                     <h5>Password</h5>
//                     <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

//                     <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
//                 </form>

//                 <p style={{color:'Black'}}>
//                     By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
//                     see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
//                 </p>

//                 <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
                
//             </div>
//         </div>
//     )
// }

// export default Login
import React,{useState} from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
       
        <div className="section">
            <div className="box">
                <div className="form">
                    <h2>Login</h2>
                    <form>
                        <div className="inputBx">
                            <AccountCircleIcon className="img"/>
                            <input type='text' placeholder="EmailId" value={email} onChange={e => setEmail(e.target.value)} />
                            {/* <input type="text" placeholder="EmailId"></input> */}
                        </div>
                        <div className="inputBx">
                            <LockIcon className="img"/>
                            <input type='password' placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                            {/* <input type="password" placeholder="Password" style={{color:"white"}} ></input> */}
                        </div>
                        <div className="inputBx" >
                            <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                            
                                {/* <input type="submit"  className="submit"  value="Login"></input> */}
                            
                        </div>
                        <div className="inputBx"  >
                            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
                                {/* <input type="submit" value="Create Your Account"></input> */}
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
