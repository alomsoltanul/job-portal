import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContex';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <>
            <span className="loading loading-dots loading-xs"></span>
            <span className="loading loading-dots loading-sm"></span>
            <span className="loading loading-dots loading-md"></span>
            <span className="loading loading-dots loading-lg"></span>
            <span className="loading loading-dots loading-xl"></span>
        </>
    }

    if (!user) {
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;