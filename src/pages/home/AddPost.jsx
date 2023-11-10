import React from "react";
import { Textarea, Button, ButtonGroup, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AddPost = ({ open, onOpen, close }) => {
    let [value, setValue] = React.useState("");

    let handleInputChange = (e) => {
        let inputValue = e.target.value;
        setValue(inputValue);
    };
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "6" }}>
                {" "}
                <Textarea
                    value={value}
                    onChange={handleInputChange}
                    placeholder="What's on your mind ?"
                    size="sm"
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                    }}
                >
                    <ButtonGroup>
                        <Link to="/">
                            <Button mr={3} variant="ghost" onClick={close}>
                                Return
                            </Button>
                        </Link>

                        <Button colorScheme="blue">Add</Button>
                    </ButtonGroup>
                </Box>
            </Box>
        </>
    );
};

export default AddPost;
