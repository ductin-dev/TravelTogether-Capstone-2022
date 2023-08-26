import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HeaderComponent from '../Components/HeaderComponent/HeaderComponent'
import SideBarComponent from '../Components/SideBarComponent/SideBarComponent'
import { PATH } from '../Config/RouterName'
import HomePage from '../Pages/HomePage/HomePage'
import MapPage from '../Pages/MapPage/MapPage'
import TravelRequestPage from '../Pages/TravelRequestPage/TravelRequestPage'
import ProtectedRoutes from '../ProtectedRoutes'

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <>
            <HeaderComponent />
            <SideBarComponent />
            <Routes>
                {/* public routes */}
                {/* we want to protect these routes */}
                <Route element={<ProtectedRoutes />}>
                    <Route path={PATH.HOME} element={<HomePage />} />
                    <Route path={PATH.TRAVEL_REQUEST} element={<TravelRequestPage />} />
                    <Route path={PATH.MAPEXPLORE} element={<MapPage />} />
                </Route>
                {/* catch all */}
                {/* <Route path="*" element={<Missing />} /> */}
            </Routes>
        </>
    )
}

export default MainLayout