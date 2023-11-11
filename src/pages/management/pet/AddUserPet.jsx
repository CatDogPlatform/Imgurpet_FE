import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
    Textarea,
    Button,
    ButtonGroup,
    Box,
    Input,
    RadioGroup,
    Radio,
    Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import axios from "axios";
import { Formik, Field } from "formik";

const dropzoneStyles = {
    border: "2px dashed #e0e4e9",
    borderRadius: "4px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
};

const AddUserPet = () => {
    const initialPetData = {
        name: "",
        description: "",
        weight: 0,
        price: 0,
        gender: "",
        petType: "",
        imageUrl: "",
    };
    const [petData, setPetData] = React.useState();
    const navigate = useNavigate();
    const jsonString = localStorage.getItem("userInfor");
    const user = JSON.parse(jsonString);
    const [userId, setUserId] = React.useState(user._id);
    const [loading, setLoading] = React.useState(false);
    const [image, setImage] = React.useState();

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        setImage(acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxFiles: 1,
    });

    const handleInputChange = (e) => {
        let inputValue = e.target.value;
    };

    const handleSubmit = async () => {
        setLoading(true);
        if (image) {
            try {
                const formData = new FormData();
                formData.append("file", image);
                const cloudinaryResponse = await fetch(
                    "https://api.cloudinary.com/v1_1/dzqqksb9a/image/upload?upload_preset=CatDogPlatform",
                    {
                        method: "POST",
                        body: formData,
                    }
                );
                const cloudinaryData = await cloudinaryResponse.json();
                const uploadedImageUrl = cloudinaryData.secure_url;

                //POST API

                try {
                    const imageUrl = uploadedImageUrl;

                    const res = await axios.post(
                        `https://petdom-apis.onrender.com/api/pets`,
                        { userId, imageUrl }
                    );
                    setLoading(false);
                    navigate("/");
                    toast.success("Add successfully");
                } catch (e) {
                    setLoading(false);
                    toast.error("Add failed");
                }
            } catch (e) {
                setLoading(false);
                console.log(e);
            }
        } else {
            //POST API
            const imageUrl = "";
            try {
                const res = await axios.post(
                    `https://petdom-apis.onrender.com/api/pets`,
                    { userId, imageUrl }
                );
                setLoading(false);
                navigate("/");
                toast.success("Add successfully");
            } catch (e) {
                setLoading(false);
                toast.error("Add failed");
            }
        }
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
                        flexDirection: "column",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        gap: "20px",
                    }}
                >
                    <Input size="lg" placeholder="Name"></Input>
                    <Input size="lg" placeholder="Description"></Input>
                    <Input size="lg" type="number" placeholder="Price"></Input>
                    <Input size="lg" placeholder="Name"></Input>
                    <RadioGroup>
                        <Stack direction="row">
                            <Radio value="1">First</Radio>
                            <Radio value="2">Second</Radio>
                            <Radio value="3">Third</Radio>
                        </Stack>
                    </RadioGroup>
                </Box>
                <Box sx={{ width: "100%" }}>
                    <div style={dropzoneStyles} {...getRootProps()}>
                        <input {...getInputProps()} />
                        {isDragActive ? (
                            <p>Drop file(s) here ...</p>
                        ) : (
                            <p>
                                Drag and drop file(s) here, or click to select
                                files
                            </p>
                        )}
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        {image && (
                            <img src={`${URL.createObjectURL(image)}`} alt="" />
                        )}
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
                            <Button mr={3} variant="ghost">
                                Return
                            </Button>
                        </Link>
                        {loading ? (
                            <Button
                                isLoading
                                loadingText="Adding"
                                colorScheme="blue"
                                onClick={handleSubmit}
                            >
                                Add
                            </Button>
                        ) : (
                            <Button colorScheme="blue" onClick={handleSubmit}>
                                Add
                            </Button>
                        )}
                    </ButtonGroup>
                </Box>
            </Box>
        </>
    );
};

export default AddUserPet;
