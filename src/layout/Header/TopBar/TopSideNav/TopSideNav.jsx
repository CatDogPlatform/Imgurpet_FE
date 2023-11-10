import React from "react";
import "./TopSideNav.scss";
import { menuItems } from "./menuItem";
import { Link, useLocation } from "react-router-dom";
const TopSideNav = () => {
  const location = useLocation(); // Sử dụng useLocation để lấy thông tin về URL hiện tại
  const isActive = (path) => {
    return location.pathname === path; // So sánh URL hiện tại với path của mỗi thẻ
  };

  return (
    <div className="nav-menu">
      {menuItems.map((item) => (
        <Link to={item.link}>
          <div className="nav-menu__item">
            <h1
              className="item-title"
              style={{
                color: isActive(item.link) ? "#0079FF" : "black",
                textDecoration: isActive(item.link) ? "underline" : "none",
                fontWeight: isActive(item.link) ? "bold" : 400,
              }}
            >
              {item.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopSideNav;
