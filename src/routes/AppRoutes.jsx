import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutUser from "../layout/LayoutUser";
import Login from "./../pages/auth/Login";
import Unauthorized from "./../pages/403/Unauthorized";
import AuthRoute from "./authRoutes";
import { ROLES } from "./roles";
import { adminRoutes, userRoutes } from "./routesByRole";
import CheckRoute from "./checkRoutes";
import NotFound from "./../pages/404/NotFound";
import Home from "./../pages/home/Home";
import LayoutAdmin from "../layout/adminlayout/LayoutAdmin";

const AppRoutes = () => {
  return (
    <Routes>
      <Route key="all_routes" element={<LayoutUser />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<CheckRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/unauthorized" element={<Unauthorized />}></Route>
      <Route key="home" element={<AuthRoute allowedRoles={[ROLES.MEMBER]} />}>
        <Route key="member_routes" element={<LayoutUser />}>
          {userRoutes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Route>
      </Route>

      <Route key="home" element={<AuthRoute allowedRoles={[ROLES.ADMIN]} />}>
        <Route key="layout_public" element={<LayoutAdmin />}>
          {adminRoutes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
