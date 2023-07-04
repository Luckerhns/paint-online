import React from "react";
import Canvas from "../components/Canvas";
import Toolbar from "../components/Toolbar";
import SettingBar from "../components/SettingBar";

const MainPage = () => {
    return (
        <div>
            <Toolbar />
            <SettingBar />
            <Canvas />
        </div>
    );
};

export default MainPage;
