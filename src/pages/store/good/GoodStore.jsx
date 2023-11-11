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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

const GoodStore = () => {
    const [goods, setGoods] = React.useState([]);
    const fetchGoods = async () => {
        try {
            const res = await axios.get(
                "https://petdom-apis.onrender.com/api/goods?search="
            );
            setGoods(res.data);
        } catch (error) {
            console.error("Lỗi khi tải dữ liệu: ", error);
        }
    };

    React.useEffect(() => {
        fetchGoods();
    }, []);
    return (
        <>
            <Grid templateColumns="repeat(4, 2fr)" gap={6}>
                {goods &&
                    goods.map((item) => (
                        <GridItem w="100%" h="100%">
                            <Card maxW="sm" sx={{ height: "500px" }}>
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
                                        <Image
                                            src={item?.images}
                                            alt="Green double couch with wooden legs"
                                            borderRadius="lg"
                                        />
                                    </Box>

                                    <Divider sx={{ color: "#e0e4e9" }} />
                                    <Stack mt="6" spacing="3">
                                        <Heading size="md">
                                            {item?.name}
                                        </Heading>
                                        <Text>{item?.description}</Text>
                                        <Text color="blue.600" fontSize="2xl">
                                            ${item?.price}
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider sx={{ color: "#e0e4e9" }} />
                                <CardFooter sx={{ justifyContent: "flex-end" }}>
                                    <ButtonGroup spacing="2">
                                        <Link to="/goods/detail">
                                            <Button
                                                variant="solid"
                                                colorScheme="blue"
                                            >
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

export default GoodStore;
