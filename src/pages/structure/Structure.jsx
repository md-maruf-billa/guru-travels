import React from 'react';
import { NavLink , Outlet} from 'react-router-dom';
import Home from '../home/Home';

const Structure = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Structure;