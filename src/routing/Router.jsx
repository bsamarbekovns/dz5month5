import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
import CardPages from "../pages/CardPages.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/card/:id' element={<CardPages/>}/>
        </Routes>
    );
};

export default Router;