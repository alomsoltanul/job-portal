import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Navbar/navbar';
import Footer from '../pages/footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;