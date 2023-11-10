import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Grid,
  Text,
} from "@chakra-ui/react";

export const DetailModal = ({ row, isOpen, handleCloseDetailModal }) => {
  return (
    <Modal isOpen={isOpen} onClose={handleCloseDetailModal} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize="xl" fontWeight="bold">
            Detail
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Grid templateColumns="1fr 1fr" gap={4}>
              <Box>
                <Text>Date</Text>
                <Text>{row?.date}</Text>
              </Box>
              <Box>
                <Text>User</Text>
                <Text>{row?.user}</Text>
              </Box>
              <Box>
                <Text>Status</Text>
                <Text>{row?.status}</Text>
              </Box>
            </Grid>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
