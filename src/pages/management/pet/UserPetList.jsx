import React, { useState, useEffect } from "react";
import {
    Box,
    Heading,
    Grid,
    GridItem,
    Image,
    Text,
    Button,
    ButtonGroup,
    Divider,
    Card,
    CardBody,
    CardFooter,
    Link,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from "@chakra-ui/react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserPetList = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [deletePetId, setDeletePetId] = useState(null);

    useEffect(() => {
        const fetchPets = async () => {
            try {
                const response = await axios.get("https://petdom-apis.onrender.com/api/pets?search=");
                setPets(response.data);
            } catch (error) {
                console.error("Error fetching pets:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPets();
    }, []);

    const handleDelete = async (petId) => {
        try {
            // Hiển thị modal xác nhận xóa
            setDeletePetId(petId);
            onOpen();
        } catch (error) {
            console.error("Error deleting pet:", error);
        }
    };

    const handleConfirmDelete = async () => {
        try {
            // Gửi yêu cầu DELETE đến API endpoint với deletePetId
            await axios.delete(`https://petdom-apis.onrender.com/api/pets/${deletePetId}`);

            // Cập nhật state để loại bỏ thú cưng đã xóa
            setPets((prevPets) => prevPets.filter((pet) => pet._id !== deletePetId));

            toast.success("Success!");
        } catch (error) {
            console.error("Error deleting pet:", error);
        } finally {
            // Đóng modal xác nhận xóa
            onClose();
            setDeletePetId(null);
        }
    };

    const handleCancelDelete = () => {
        // Hủy bỏ xóa, đóng modal xác nhận
        onClose();
        setDeletePetId(null);
    };

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
                <Box
                    sx={{
                        width: "50%",
                        justifyContent: "flex-start",
                        marginBottom: "30px",
                    }}
                >
                    <Heading as="h3" size="lg">
                        My Pets
                    </Heading>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        width: "50%",
                        justifyContent: "flex-end",
                        marginBottom: "30px",
                    }}
                >
                    <Link to="/profile/mypets/add">
                        <Button>Add</Button>
                    </Link>
                </Box>
            </Box>

            <Grid templateColumns="repeat(4, 2fr)" gap={6}>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    pets.map((pet) => (
                        <GridItem key={pet.id} w="100%" h="100%">
                            <Card maxW="sm">
                                <CardBody>
                                    <Image src={pet.images} alt={pet.name} borderRadius="lg" />
                                    <Text mt="6" fontSize="md">
                                        <b>{pet.name}</b>
                                    </Text>
                                    <Text fontSize="sm">{pet.description}</Text>
                                    <Text color="blue.600" fontSize="2xl">
                                        {`$${pet.price}`}
                                    </Text>
                                    <Text color={pet.status === "Available" ? "green" : "red"} fontWeight="700">
                                        {pet.status}
                                    </Text>
                                </CardBody>
                                <Divider sx={{ color: "#e0e4e9" }} />
                                <CardFooter sx={{ justifyContent: "flex-end" }}>
                                    <ButtonGroup spacing="2">
                                        <Link to={`/pets/detail/${pet._id}`}>
                                            <Button variant="solid" colorScheme="green">
                                                Update
                                            </Button>
                                        </Link>
                                        <Button variant="solid" colorScheme="red" onClick={() => handleDelete(pet._id)}>
                                            Delete
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    ))
                )}
            </Grid>

            {/* Modal xác nhận xóa */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Xác nhận xóa</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Bạn có chắc chắn muốn xóa thú cưng này?</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="red" mr={3} onClick={handleCancelDelete}>
                            Hủy
                        </Button>
                        <Button colorScheme="green" onClick={handleConfirmDelete}>
                            Xác nhận
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default UserPetList;
