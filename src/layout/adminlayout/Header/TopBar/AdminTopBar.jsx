import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { colors } from "../../../../Styles/Color/colors";
import Logo from "../../../../components/Logo/logo";
import useAuth from "../../../../hooks/useAuth";
import AdminSearchBar from "./SearchBar/AdminSearchBar";
import "./TopBar.scss";

const AdminTopBar = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    setAuth({});
    navigate("/login");
    toast.success("Logout successfully !");
  };
  return (
    <>
      <table className="nav-main-tbl">
        <tr>
          <th>
            <Link to="/">
              <Logo />
            </Link>
          </th>
          <th style={{ width: "10%" }}>
            {/* <Link to="/add"> */}
            <Button variant="solid" alignItems="center" leftIcon={<AddIcon />}>
              <Text
                fontWeight="bold"
                color={colors.gray_500}
                style={{ fontSize: 13 }}
              >
                New post
              </Text>
            </Button>
            {/* </Link> */}
          </th>
          <th style={{ width: "70%" }}>
            <AdminSearchBar />
          </th>
          <th style={{ width: "1%" }}></th>
          <th style={{ width: "1%" }}>
            <div
              style={{
                borderLeft: `1.5px solid ${colors.gray_400}`,
                height: 40,
              }}
            ></div>
          </th>
          <th style={{ width: "8%" }}>
            {/* <Stack direction="row" gap={3}>
                            <FontAwesomeIcon
                                icon={faBell}
                                style={{
                                    color: colors.gray_500,
                                    width: "25px",
                                    height: "25px",
                                }}
                            />
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                style={{
                                    color: colors.gray_500,
                                    width: "25px",
                                    height: "25px",
                                }}
                            />
                        </Stack> */}

            {auth?.user ? (
              <Menu sx={{ position: "relative" }}>
                <MenuButton as={Button} colorScheme="orange">
                  Account
                </MenuButton>

                <MenuList>
                  <MenuGroup title="Profile">
                    <Link to="/profile">
                      <MenuItem>My Account</MenuItem>
                    </Link>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Management">
                    {/* <Link to="/profile/mypets"> */}
                    <MenuItem>My Pets</MenuItem>
                    {/* </Link> */}
                    {/* <Link to="/profile/mygoods"> */}
                    <MenuItem>My Goods</MenuItem>
                    {/* </Link> */}
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuItem onClick={handleLogOut} color="red">
                      Sign Out
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button colorScheme="orange">Sign In</Button>
              </Link>
            )}
          </th>
        </tr>
      </table>
    </>
  );
};

export default AdminTopBar;
