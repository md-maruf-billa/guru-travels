import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>
    }
])

export default Routes;