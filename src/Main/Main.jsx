import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/Home/Shiad/Footer/Footer';
import Navbar from '../pages/Home/Home/Shiad/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;