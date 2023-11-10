import Home from "../pages/home/Home";
import PetStore from "./../pages/store/pet/PetStore";
import PetDetail from "./../pages/store/pet/PetDetail";
import GoodStore from "../pages/store/good/GoodStore";
import GoodDetail from "../pages/store/good/GoodDetail";
import UserPetList from "./../pages/management/pet/UserPetList";
import UserGoodlist from "./../pages/management/good/UserGoodList";
import AddPost from "./../pages/home/AddPost";
import StaffList from "../pages/admin/staffManagement/StaffList";

export const userRoutes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/add",
        element: <AddPost />,
    },
    {
        path: "/pets",
        element: <PetStore />,
    },
    {
        path: "/pets/detail",
        element: <PetDetail />,
    },
    {
        path: "/goods",
        element: <GoodStore />,
    },
    {
        path: "/goods/detail",
        element: <GoodDetail />,
    },
    {
        path: "/profile/mypets",
        element: <UserPetList />,
    },
    {
        path: "/profile/mygoods",
        element: <UserGoodlist />,
    },
];

export const adminRoutes = [
    {
        path: "/admin",
        element: <StaffList />,
    },
];
