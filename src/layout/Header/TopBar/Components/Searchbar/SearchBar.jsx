import { Button } from "@chakra-ui/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../../../Styles/Color/colors";
import "../../../../../index.css";
import "./Searchbar.scss";

const SearchBar = () => {
    return (
        <div className="search">
            <div className="search__input">
                <div className="search__icon-left">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ color: colors.gray_400 }}
                    />
                </div>

                <input
                    type="text"
                    className="search__field"
                    placeholder="Search for anything"
                />
            </div>

            <Button
                style={{
                    borderRadius: "10px",
                    width: "20%",
                    height: "100%",
                    backgroundColor: "#0d4ba9",
                    color: colors.white,
                }}
            >
                <p style={{ fontSize: 13, fontWeight: 400 }}>Search</p>
            </Button>
        </div>
    );
};

export default SearchBar;
