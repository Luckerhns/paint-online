import React from "react";
import "./styles/app.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/:id" element={<MainPage />} />
                    <Route
                        path="*"
                        element={
                            <Navigate to={`f${(+new Date()).toString(16)}`} />
                        }
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;

// const pages = [
//     { id: 1, element: <Toolbar/> },
//     { id: 2, element: SettingBar },
//     { id: 3, element: Canvas },
// ];
