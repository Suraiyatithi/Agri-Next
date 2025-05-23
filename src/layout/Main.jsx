import React from 'react';
import Footer from '../home/Footer';
import Header from '../home/Header';
import { Outlet } from 'react-router-dom';
import Topper from './Topper';

const Main = () => {
    return (
        <div>
         <Topper></Topper>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;