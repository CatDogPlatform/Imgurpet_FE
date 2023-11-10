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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const GoodStore = () => {
    return (
        <>
            <Grid templateColumns="repeat(4, 2fr)" gap={6}>
                <GridItem w="100%" h="100%">
                    {" "}
                    <Card maxW="sm">
                        <CardBody>
                            <Image
                                src="https://www.rover.com/blog/wp-content/uploads/2021/03/iStock-678257014-min-scaled-e1616796496836.jpg"
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
                                <Link to="/goods/detail">
                                    <Button variant="solid" colorScheme="blue">
                                        View
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
                                src="https://www.rover.com/blog/wp-content/uploads/2021/03/iStock-678257014-min-scaled-e1616796496836.jpg"
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
                                <Link to="/goods/detail">
                                    <Button variant="solid" colorScheme="blue">
                                        View
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
                                src="https://www.rover.com/blog/wp-content/uploads/2021/03/iStock-678257014-min-scaled-e1616796496836.jpg"
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
                                <Link to="/goods/detail">
                                    <Button variant="solid" colorScheme="blue">
                                        View
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

export default GoodStore;
