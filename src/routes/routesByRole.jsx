import Home from "../pages/home/Home";
import PetStore from "./../pages/store/pet/PetStore";
import PetDetail from "./../pages/store/pet/PetDetail";
import GoodStore from "../pages/store/good/GoodStore";
import GoodDetail from "../pages/store/good/GoodDetail";
import UserPetList from "./../pages/management/pet/UserPetList";
import UserGoodlist from "./../pages/management/good/UserGoodList";
import AddPost from "./../pages/home/AddPost";
import StaffList from "../pages/admin/staffManagement/StaffList";
import Profile from "./../pages/profile/Profile";
import AddUserPet from "./../pages/management/pet/AddUserPet";
import AddUserGood from "./../pages/management/good/AddUserGood";
import PostList from "../pages/postList/postList";

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
    path: "/pets/:id",
    element: <PetDetail />,
  },
  {
    path: "/goods",
    element: <GoodStore />,
  },
  {
    path: "/goods/:id",
    element: <GoodDetail />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/profile/mypets",
    element: <UserPetList />,
  },
  {
    path: "/profile/mypets/add",
    element: <AddUserPet />,
  },
  {
    path: "/profile/mygoods",
    element: <UserGoodlist />,
  },
  {
    path: "/profile/mygoods/add",
    element: <AddUserGood />,
  },
];

export const adminRoutes = [
  {
    path: "/stafflist",
    element: <StaffList />,
  },
  {
    path: "/postlist",
    element: <PostList />,
  },
];
