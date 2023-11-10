import React from "react";
import { Textarea, Button, ButtonGroup, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const dropzoneStyles = {
    border: "2px dashed #e0e4e9",
    borderRadius: "4px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
};

const AddPost = ({ open, onOpen, close }) => {
    const [content, setContent] = React.useState("");
    const [image, setImage] = React.useState("");
    const onDrop = useCallback((acceptedFiles) => {
        const formData = new FormData();
        formData.append("image", acceptedFiles[0]);
        setImage(formData);
    }, []);
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const handleInputChange = (e) => {
        let inputValue = e.target.value;
        setContent(inputValue);
    };

    const handleSubmit = async () => {
        const cloudinaryResponse = await fetch(
            "https://api.cloudinary.com/v1_1/dzqqksb9a/image/upload?upload_preset=CatDogPlatform",
            {
                method: "POST",
                body: image,
            }
        );
        const cloudinaryData = await cloudinaryResponse.json();

        console.log("Upload response:", cloudinaryData);

        // Lấy URL an toàn từ Cloudinary
        const uploadedImageUrl = cloudinaryData.secure_url;
    };

    return (
        <>
            <Box
                sx={{
                    padding: "100px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        flexDirection: "row",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                    }}
                >
                    <Textarea
                        sx={{
                            height: "150px",
                        }}
                        value={content}
                        onChange={handleInputChange}
                        placeholder="What's on your mind ?"
                        size="sm"
                    />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <div>
                        <div {...getRootProps()} style={dropzoneStyles}>
                            <input {...getInputProps()} />
                            <p style={{ color: "#C3C3C3" }}>
                                Drag 'n' drop an image here, or click to select
                                image
                            </p>
                        </div>
                    </div>
                </Box>

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
