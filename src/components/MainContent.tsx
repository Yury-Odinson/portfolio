import {Route, Routes} from "react-router-dom";
import {Main} from "../pages/Main";
import {AboutMe} from "../pages/AboutMe";
import {NotFound} from "../pages/NotFound";
import React from "react";

export const MainContent = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/about" element={<AboutMe/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </main>
    );
};
