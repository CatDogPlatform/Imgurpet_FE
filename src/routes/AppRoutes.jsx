import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutUser from "../layout/LayoutUser";
import Home from "../pages/home/Home";
import PetStore from "./../pages/store/pet/PetStore";
import PetDetail from "./../pages/store/pet/PetDetail";
import GoodStore from "../pages/store/good/GoodStore";
import GoodDetail from "../pages/store/good/GoodDetail";
import UserPetList from "./../pages/management/pet/UserPetList";
import UserGoodlist from "./../pages/management/good/UserGoodList";
import AddPost from "./../pages/home/AddPost";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutUser />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddPost />} />
                    <Route path="/pets" element={<PetStore />} />
                    <Route path="/pets/detail" element={<PetDetail />} />
                    <Route path="/goods" element={<GoodStore />} />
                    <Route path="/goods/detail" element={<GoodDetail />} />
                    <Route path="/profile/mypets" element={<UserPetList />} />
                    <Route path="/profile/mygoods" element={<UserGoodlist />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
