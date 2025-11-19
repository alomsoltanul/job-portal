// import React from 'react';
import Lottie from "lottie-react";
// import React, {use} form 'react';
import signinLottie from "../../assets/lotties/Login.json"
import { AuthContext } from "../../context/AuthContext/AuthContex";
import { use } from "react";
import GoogleLogin from "../Navbar/GoogleLogin";
import { useLocation, useNavigate } from "react-router";
const Login = () => {
    const { signInUser } =use(AuthContext);
    const location =useLocation();
    const nagigate =useNavigate();
    const from =location.state || '/';
    
        const handleSignIn = e => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            console.log(email,password);
    
        //    sign in users
        signInUser(email, password)
        .then(result =>{
            console.log(result);
            nagigate(from);
        }).catch(error => {
            console.log(error);
        })

        }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie loop={true} animationData={signinLottie}> </Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <form onSubmit={handleSignIn}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name="email"className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password"name="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </form>
                            <GoogleLogin from={from}></GoogleLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;