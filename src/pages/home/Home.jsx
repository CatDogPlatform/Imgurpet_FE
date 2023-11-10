import React from "react";
import { ChatIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { IconButton, Flex, Avatar, Box } from "@chakra-ui/react";
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
    Container,
} from "@chakra-ui/react";
import "./Home.scss";
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [page, setPage] = React.useState(1);

    const fetchPosts = async () => {
        const res = await axios.get(
            "https://petdom-apis.onrender.com/api/posts?search="
        );
        setPosts(res.data);
    };

    React.useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <div className="awards-cards">
                {posts &&
                    posts.map((item) => (
                        <div class="award-card__wrapper">
                            <Card maxW="md">
                                <CardHeader>
                                    <Flex spacing="4">
                                        <Flex
                                            flex="1"
                                            gap="4"
                                            alignItems="center"
                                            flexWrap="wrap"
                                        >
                                            {/* <Avatar
                                                name="Segun Adebayo"
                                                src="https://bit.ly/sage-adebayo"
                                            /> */}

                                            <Box>
                                                <Heading size="sm">
                                                    {item?.user?.fullname}
                                                </Heading>
                                                {/* <Text>Creator, Chakra UI</Text> */}
                                            </Box>
                                        </Flex>
                                    </Flex>
                                </CardHeader>
                                <CardBody>
                                    <Text>{item.content}</Text>
                                </CardBody>
                                <Image
                                    htmlHeight="200"
                                    objectFit="cover"
                                    src={item.images}
                                    alt="Chakra UI"
                                />

                                <CardFooter
                                    justify="space-between"
                                    flexWrap="wrap"
                                    sx={{
                                        "& > button": {
                                            minW: "60px",
                                        },
                                    }}
                                >
                                    <Button
                                        flex="1"
                                        variant="ghost"
                                        leftIcon={<BiLike />}
                                    >
                                        Like
                                    </Button>
                                    <Button
                                        flex="1"
                                        variant="ghost"
                                        leftIcon={<BiChat />}
                                    >
                                        Comment
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Home;
