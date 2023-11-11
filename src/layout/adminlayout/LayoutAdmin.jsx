import React from "react";
import { Outlet } from "react-router-dom";
import AdminTopBar from "./Header/TopBar/AdminTopBar";
import "./LayoutAdmin.scss";

import AdminTopSideNav from "./Header/TopBar/TopSideNav/AdminTopSideNav";

//import TopBanner from "./Header/TopBanner/TopBanner"

const LayoutAdmin = () => {
  return (
    <>
      <body>
        <header className="header" id="header">
          <div className="header__main" id="header__main">
            <AdminTopBar />
          </div>
          <div className="header__side_nav">
            <AdminTopSideNav />
          </div>
        </header>

        <div className="main-content">
          <Outlet />
        </div>
      </body>
    </>
  );
};

export default LayoutAdmin;
