import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "./Header/TopBar/TopBar";
import "./LayoutUser.scss";
import "../Styles/Shared/shared.scss";
import TopSideNav from "./Header/TopBar/TopSideNav/TopSideNav";
//import TopBanner from "./Header/TopBanner/TopBanner"

const LayoutUser = () => {
    return (
        <>
            <body>
                <header className="header" id="header">
                    <div className="header__main" id="header__main">
                        <TopBar />
                    </div>
                    <div className="header__side_nav">
                        <TopSideNav />
                    </div>
                </header>

                <div className="main-content">
                    <Outlet />
                </div>
            </body>
        </>
    );
};

export default LayoutUser;
