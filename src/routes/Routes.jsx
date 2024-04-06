import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Designation from '../pages/designation/Designation';

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>,
    },
    {
        path:"/designation",
        element:<Designation></Designation>
    }
])

export default Routes;