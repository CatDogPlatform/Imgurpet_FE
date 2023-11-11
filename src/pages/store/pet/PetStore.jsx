import React from "react";
import {
    Card,
    Box,
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
    useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import PetDetail from "./PetDetail";

const PetStore = () => {
    const [pets, setPets] = React.useState([]);

    const fetchPets = async () => {
        const res = await axios.get("https://petdom-apis.onrender.com/api/pets?search=");
        setPets(res.data);
    };

    React.useEffect(() => {
        fetchPets();
    }, []);
    return (
        <>
            <Grid templateColumns="repeat(4, 2fr)" gap={6}>
                {pets &&
                    pets.map((item) => (
                        <GridItem w="100%" h="100%">
                            <Card maxW="sm">
                                <CardBody>
                                    <Box
                                        height="250px"
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Image src={item?.images} alt="Green double couch with wooden legs" borderRadius="lg" />
                                    </Box>
                                    <Stack mt="6" spacing="3">
                                        <Heading size="md">{item?.name}</Heading>
                                        {/* <Text>{item?.description}</Text> */}
                                    </Stack>
                                </CardBody>
                                <Divider sx={{ color: "#e0e4e9" }} />
                                <CardFooter sx={{ justifyContent: "flex-end" }}>
                                    <ButtonGroup spacing="2">
                                        <Link to={`/pets/${item._id}`}>
                                            <Button variant="solid" colorScheme="blue">
                                                View
                                            </Button>
                                        </Link>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    ))}
            </Grid>
        </>
    );
};

export default PetStore;
