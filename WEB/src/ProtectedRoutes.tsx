// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useAuth from "./Hooks/useAuth";

// const RequireAuth = ({ allowedRoles }: any) => {
//     const { auth }: any = useAuth();
//     const location = useLocation();

//     return (
//         auth?.roles?.find((role: any) => allowedRoles?.includes(role))
//             ? <Outlet />
//             : auth?.user
//                 ? <Navigate to="/unauthorized" state={{ from: location }} replace />
//                 : <Navigate to="/login" state={{ from: location }} replace />
//     );
// }

// export default RequireAuth;

import React from "react"

import { Navigate, Outlet } from "react-router-dom"
import useAuth from "./Hooks/useAuth"


//protected Route state
type ProtectedRouteType = {
	roleRequired?: "USER_GUILD" | "USER"
}

const ProtectedRoutes = (props: ProtectedRouteType) => {
	const { auth, role } = useAuth()

	//if the role required is there or not
	if (props.roleRequired) {
		return auth ? (
			props.roleRequired === role ? (
				<Outlet />
			) : (
				<Navigate to="/denied" />
			)
		) : (
			<Navigate to="/login" />
		)
	} else {
		return auth ? <Outlet /> : <Navigate to="/login" />
	}
}

export default ProtectedRoutes