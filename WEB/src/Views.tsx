import { Route, Routes, } from "react-router-dom";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import Layout from "./Components/Layout/Layout";
import { PATH } from "./Config/RouterName";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import MapPage from "./Pages/MapPage/MapPage";
import TravelRequestPage from "./Pages/TravelRequestPage/TravelRequestPage";
import ProtectedRoutes from "./ProtectedRoutes";
import RequireAuth from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";

const ROLES = {
    'User': "ROLE_USER",
    'Editor': "ROLE_ADMIN",
    'Admin': "ROLE_LOCAL_GUILD"
}

const Views = () => {
    return (
        <Routes>
            {/* public routes */}
            <Route >
                <Route path={PATH.LOGIN} element={<LoginPage />} />
            </Route>
            {/* we want to protect these routes */}
            <Route element={<ProtectedRoutes />}>
                <Route path="/*" element={<MainLayout />} />
            </Route>
            {/* catch all */}
            {/* <Route path="*" element={<Missing />} /> */}
        </Routes>
    );
};

export default Views;