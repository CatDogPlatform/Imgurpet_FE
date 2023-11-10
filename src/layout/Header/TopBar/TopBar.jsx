import {
    Button,
    Text,
    Stack,
    Menu,
    MenuButton,
    MenuList,
    MenuGroup,
    MenuItem,
    MenuDivider,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./Components/Searchbar/SearchBar";
import Logo from "../../../components/Logo/logo";
import { colors } from "../../../Styles/Color/colors";
import "./TopBar.scss";
import AddPost from "../../../pages/home/AddPost";
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <>
            <table className="nav-main-tbl">
                <tr>
                    <th>
                        <Logo />
                    </th>
                    <th style={{ width: "10%" }}>
                        <Link to="/add">
                            <Button
                                variant="solid"
                                alignItems="center"
                                leftIcon={<AddIcon />}
                            >
                                <Text
                                    fontWeight="bold"
                                    color={colors.gray_500}
                                    style={{ fontSize: 13 }}
                                >
                                    New post
                                </Text>
                            </Button>
                        </Link>
                    </th>
                    <th style={{ width: "70%" }}>
                        <SearchBar />
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
                        <Menu sx={{ position: "relative" }}>
                            <MenuButton as={Button} colorScheme="orange">
                                Profile
                            </MenuButton>
                            <MenuList>
                                <MenuGroup title="Profile">
                                    <MenuItem>My Account</MenuItem>
                                </MenuGroup>
                                <MenuDivider />
                                <MenuGroup title="Management">
                                    <Link to="/profile/mypets">
                                        <MenuItem>My Pets</MenuItem>
                                    </Link>
                                    <Link to="/profile/mygoods">
                                        <MenuItem>My Goods</MenuItem>
                                    </Link>
                                </MenuGroup>
                            </MenuList>
                        </Menu>
                    </th>
                </tr>
            </table>
        </>
    );
};

export default TopBar;
