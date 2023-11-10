import React from "react";
import {
    Card,
    CardHeader,
    Divider,
    Image,
    CardBody,
    CardFooter,
    Stack,
    Text,
    Heading,
    ButtonGroup,
    Button,
    Grid,
    GridItem,
    Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UserPetList = () => {
    return (
        <>
            <Box sx={{ justifyContent: "flex-start", marginBottom: "30px" }}>
                <Heading as="h3" size="lg">
                    My Pets
                </Heading>
            </Box>

            <Grid templateColumns="repeat(4, 2fr)" gap={6}>
                <GridItem w="100%" h="100%">
                    {" "}
                    <Card maxW="sm">
                        <CardBody>
                            <Image
                                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                            />
                            <Stack mt="6" spacing="3">
                                <Heading size="md">Living room Sofa</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical
                                    spaces, baroque inspired spaces, earthy
                                    toned spaces and for people who love a chic
                                    design with a sprinkle of vintage design.
                                </Text>
                                <Text color="blue.600" fontSize="2xl">
                                    $450
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider sx={{ color: "#e0e4e9" }} />
                        <CardFooter sx={{ justifyContent: "flex-end" }}>
                            <ButtonGroup spacing="2">
                                <Link to="/pets/detail">
                                    <Button variant="solid" colorScheme="green">
                                        Update
                                    </Button>
                                </Link>
                                <Link to="/pets/detail">
                                    <Button variant="solid" colorScheme="red">
                                        Delete
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem w="100%" h="100%">
                    {" "}
                    <Card maxW="sm">
                        <CardBody>
                            <Image
                                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                            />
                            <Stack mt="6" spacing="3">
                                <Heading size="md">Living room Sofa</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical
                                    spaces, baroque inspired spaces, earthy
                                    toned spaces and for people who love a chic
                                    design with a sprinkle of vintage design.
                                </Text>
                                <Text color="blue.600" fontSize="2xl">
                                    $450
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider sx={{ color: "#e0e4e9" }} />
                        <CardFooter sx={{ justifyContent: "flex-end" }}>
                            <ButtonGroup spacing="2">
                                <Link to="/pets/detail">
                                    <Button variant="solid" colorScheme="green">
                                        Update
                                    </Button>
                                </Link>
                                <Link to="/pets/detail">
                                    <Button variant="solid" colorScheme="red">
                                        Delete
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem w="100%" h="100%">
                    {" "}
                    <Card maxW="sm">
                        <CardBody>
                            <Image
                                src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Green double couch with wooden legs"
                                borderRadius="lg"
                            />
                            <Stack mt="6" spacing="3">
                                <Heading size="md">Living room Sofa</Heading>
                                <Text>
                                    This sofa is perfect for modern tropical
                                    spaces, baroque inspired spaces, earthy
                                    toned spaces and for people who love a chic
                                    design with a sprinkle of vintage design.
                                </Text>
                                <Text color="blue.600" fontSize="2xl">
                                    $450
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider sx={{ color: "#e0e4e9" }} />
                        <CardFooter sx={{ justifyContent: "flex-end" }}>
                            <ButtonGroup spacing="2">
                                <Link to="/pets/detail">
                                    <Button variant="solid" colorScheme="green">
                                        Update
                                    </Button>
                                </Link>
                                <Link to="/pets/detail">
                                    <Button variant="solid" colorScheme="red">
                                        Delete
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </GridItem>
            </Grid>
        </>
    );
};

export default UserPetList;
