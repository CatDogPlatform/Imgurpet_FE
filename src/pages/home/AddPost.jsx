import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Button,
} from "@chakra-ui/react";

const AddPost = ({ open, onOpen, close }) => {
    return (
        <>
            <Modal blockScrollOnMount={false} isOpen={open} onClose={close}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>ABC</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} variant="ghost" onClick={close}>
                            Close
                        </Button>
                        <Button colorScheme="blue">Add</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddPost;
