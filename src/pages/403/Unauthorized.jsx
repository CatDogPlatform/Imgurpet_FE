import React from "react";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

const Unauthorized = () => {
    return (
        <>
            <Box
                minH={"100vh"}
                bg={useColorModeValue("gray.50", "gray.800")}
                py={12}
                px={{ base: 4, lg: 8 }}
            >
                <Box maxW={"md"} mx={"auto"}>
                    <Heading
                        textAlign={"center"}
                        size={"xl"}
                        fontWeight={"extrabold"}
                    >
                        Unauthorized
                    </Heading>
                </Box>
            </Box>
        </>
    );
};

export default Unauthorized;
