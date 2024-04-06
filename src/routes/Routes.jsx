import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Designation from '../pages/designation/Designation';
import Blogs from '../pages/blogs/Blogs';
import Contacts from '../pages/contacts/Contacts';
import Registration from '../pages/registration/Registration';
import Login from '../pages/login/Login';

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>,
    },
    {
        path:"/designation",
        element:<Designation></Designation>
    },
    {
        path:"/blogs",
        element:<Blogs></Blogs>
    },
    {
        path:"/contact",
        element:<Contacts></Contacts>
    },
    {
        path:"/registration",
        element:<Registration></Registration>
    },
    {
        path:"/login",
        element:<Login></Login>
    }
])

export default Routes;