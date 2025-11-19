import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext/AuthContex';

const Navbar = () => {
    const {user,signOutUser } = use(AuthContext);
    const handleSignOut = () =>{
        signOutUser()
        .then(() =>{
            console.log("Sign out user");
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/new-jobs">Job</NavLink></li>
        {/* <li><NavLink to="/register">Register</NavLink></li> */}
        <li><NavLink to="/open-jobs">Open Jobs</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div>
                {
                    user ? <button onClick={handleSignOut} className=' btn'>Sign Out</button> :
                        <>
                            <NavLink className="btn " to="/register"> Register </NavLink>
                            <NavLink className="btn " to="/login"> Login </NavLink>

                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;