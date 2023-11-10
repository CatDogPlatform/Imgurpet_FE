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
        console.log(res);
        setPosts(res.data);
    };

    React.useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            <div className="awards-cards">
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
                                    <Avatar
                                        name="Segun Adebayo"
                                        src="https://bit.ly/sage-adebayo"
                                    />

                                    <Box>
                                        <Heading size="sm">
                                            Segun Adebayo
                                        </Heading>
                                        <Text>Creator, Chakra UI</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>With Chakra UI, I wanted to sync</Text>
                        </CardBody>
                        <Image
                            htmlHeight="200"
                            objectFit="cover"
                            src="https://images.unsplash.com/photo-1616781296073-65d3f087de41?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    <Avatar
                                        name="Segun Adebayo"
                                        src="https://bit.ly/sage-adebayo"
                                    />

                                    <Box>
                                        <Heading size="sm">
                                            Segun Adebayo
                                        </Heading>
                                        <Text>Creator, Chakra UI</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                With Chakra UI, I wanted to sync the speed of
                            </Text>
                        </CardBody>
                        <Image
                            objectFit="cover"
                            src="https://images.unsplash.com/photo-1618173745201-8e3bf8978acc?q=80&w=3765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    <Avatar
                                        name="Segun Adebayo"
                                        src="https://bit.ly/sage-adebayo"
                                    />

                                    <Box>
                                        <Heading size="sm">
                                            Segun Adebayo
                                        </Heading>
                                        <Text>Creator, Chakra UI</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                With Chakra UI, I wanted to sync the speed of
                                development with the speed of design. I wanted
                                the developer to be
                            </Text>
                        </CardBody>
                        <Image
                            objectFit="cover"
                            src="https://images.unsplash.com/photo-1598628461950-268968751a2e?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    <Avatar
                                        name="Segun Adebayo"
                                        src="https://bit.ly/sage-adebayo"
                                    />

                                    <Box>
                                        <Heading size="sm">
                                            Segun Adebayo
                                        </Heading>
                                        <Text>Creator, Chakra UI</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                With Chakra UI, I wanted to sync the speed of
                                development with the speed of design. I wanted
                            </Text>
                        </CardBody>
                        <Image
                            objectFit="cover"
                            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    <Avatar
                                        name="Segun Adebayo"
                                        src="https://bit.ly/sage-adebayo"
                                    />

                                    <Box>
                                        <Heading size="sm">
                                            Segun Adebayo
                                        </Heading>
                                        <Text>Creator, Chakra UI</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                Witf design. I wanted the developer to be just
                                as excited as the designer to create a screen.
                            </Text>
                        </CardBody>
                        <Image
                            objectFit="cover"
                            src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    <Avatar
                                        name="Segun Adebayo"
                                        src="https://bit.ly/sage-adebayo"
                                    />

                                    <Box>
                                        <Heading size="sm">
                                            Segun Adebayo
                                        </Heading>
                                        <Text>Creator, Chakra UI</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                With Chakra UI, I wanted to sync the speed of
                                development with the speed of design. I wanted
                                the developer t
                            </Text>
                        </CardBody>
                        <Image
                            objectFit="cover"
                            src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?q=80&w=3256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                                    <Avatar
                                        name="Segun Adebayo"
                                        src="https://bit.ly/sage-adebayo"
                                    />

                                    <Box>
                                        <Heading size="sm">
                                            Segun Adebayo
                                        </Heading>
                                        <Text>Creator, Chakra UI</Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                With Chakra UI, I wanted to sync the speed of
                                development with the speed of design. I wanted
                                the developer to be just as excited as the
                                designer to create a screen.
                            </Text>
                        </CardBody>
                        <Image
                            objectFit="cover"
                            src="https://plus.unsplash.com/premium_photo-1664285640233-babe58af3c6b?q=80&w=3776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            </div>
        </>
    );
};

export default Home;
