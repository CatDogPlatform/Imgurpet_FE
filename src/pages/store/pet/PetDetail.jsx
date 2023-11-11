import React from "react";
import { Input, Text, Box, Image, Heading, Button } from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";

const detailTitles = {};

const PetDetail = () => {
    const petId = useParams();
    const [pet, setPet] = React.useState();

    const fetchPet = async () => {
        console.log(petId);
        const res = await axios.get(
            `https://petdom-apis.onrender.com/api/pets/${petId.id}`
        );
        setPet(res.data);
    };

    React.useEffect(() => {
        fetchPet();
    }, []);
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ width: "50%" }}>
                    <Image
                        sx={{ borderRadius: "20px" }}
                        boxSize="550px"
                        objectFit="cover"
                        src={pet?.images}
                    />
                </Box>
                <Box
                    sx={{
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px",
                    }}
                >
                    <Heading>{pet?.name}</Heading>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Box
                            sx={{
                                width: "20%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <Text fontSize="xl">Description: </Text>
                        </Box>
                        <Box
                            sx={{
                                width: "80%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Text>{pet?.description}</Text>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Box
                            sx={{
                                width: "20%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <Text fontSize="xl">Weight: </Text>
                        </Box>
                        <Box
                            sx={{
                                width: "80%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Text>{pet?.weight}</Text>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Box
                            sx={{
                                width: "20%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <Text fontSize="xl">Gender: </Text>
                        </Box>
                        <Box
                            sx={{
                                width: "80%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Text>{pet?.gender}</Text>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Box
                            sx={{
                                width: "20%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <Text fontSize="xl">Seller's name: </Text>
                        </Box>
                        <Box
                            sx={{
                                width: "80%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Text>{pet?.user?.fullname}</Text>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Box
                            sx={{
                                width: "20%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <Text fontSize="xl">Seller's email: </Text>
                        </Box>
                        <Box
                            sx={{
                                width: "80%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Text>{pet?.user?.email}</Text>
                        </Box>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                        <Box
                            sx={{
                                width: "20%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <Text fontSize="xl">Seller's phone: </Text>
                        </Box>
                        <Box
                            sx={{
                                width: "80%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Text>{pet?.user?.phone}</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default PetDetail;
