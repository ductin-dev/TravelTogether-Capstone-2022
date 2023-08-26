import React from 'react';

import { Navigate, Outlet } from 'react-router-dom'
import useAuth from './Hooks/useAuth';


const PublicRoutes = (props: any) => {

    const auth = useAuth()

    return auth ? <Navigate to="/" /> : <Outlet />
}

export default PublicRoutes;