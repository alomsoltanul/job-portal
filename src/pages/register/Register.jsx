
import React, { use } from 'react';
import Lottie from "lottie-react";
// import React, {use} form 'react';
import registerLottie from "../../assets/lotties/Analytics Character Animation.json"
import { AuthContext } from '../../context/AuthContext/AuthContex';
import GoogleLogin from '../Navbar/GoogleLogin';
const Register = () => {


     const { createUser } =use(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);

        createUser(email,password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie loop={true} animationData={registerLottie}> </Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Register now!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <form onSubmit={handleRegister}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name="email"className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password"name="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </form>
                            <GoogleLogin></GoogleLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;