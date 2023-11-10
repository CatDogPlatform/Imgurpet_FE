import React from "react";
import "./TopSideNav.scss";
import { menuItems } from "./menuItem";
import { Link } from "react-router-dom";
const TopSideNav = () => {
    return (
        <div className="nav-menu">
            {menuItems.map((item) => (
                <Link to={item.link}>
                    <div className="nav-menu__item">
                        <h1 className="item-title">{item.title}</h1>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default TopSideNav;
