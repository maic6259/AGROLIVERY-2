import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MainLayout from "./layout/layout";


const AppRoutes = () => {
    return (
        <MainLayout>
        <Routes>
            <Route path="/" element={<Home />}> </Route>
        </Routes>
        </MainLayout>
    );
};

export default AppRoutes;