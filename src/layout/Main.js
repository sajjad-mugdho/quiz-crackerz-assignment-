import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';
import Footer from '../Footer/Footer';


const Main = () => {
    return (
        <div>
            <Header />

            <Outlet />
            <Footer />

        </div>
    );
};

export default Main;