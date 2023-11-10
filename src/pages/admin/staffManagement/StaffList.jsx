import React, { useState, useEffect } from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  useToast,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  ButtonGroup,
} from "@chakra-ui/react";
import axios from "axios";
import userApi from "../../../utils/userAPI";
import { toast } from "react-toastify";

const StaffTable = () => {
  const [value, setValue] = useState("pending");
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [data, setData] = useState([]); // Dữ liệu từ API
  const [isLoading, setIsLoading] = useState(true);
  const [isBanAlertOpen, setIsBanAlertOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleDetailClick = (row) => {
    setSelectedCandidate(row);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleBanAlertOpen = (row) => {
    setSelectedRow(row);
    setIsBanAlertOpen(true);
  };

  const handleBanAlertClose = () => {
    setIsBanAlertOpen(false);
  };

  const handleBanClick = () => {
    // Gửi yêu cầu PUT lên API để đánh dấu rằng người dùng đã bị cấm.
    // axios
    //   .put(
    //     `https://petdom-apis.onrender.com/api/members/${selectedRow._id}/ban`
    //   )
    userApi
      .bannedUser(selectedRow._id)
      .then((response) => {
        console.log("log ra", response);

        // Cập nhật trạng thái cấm trong local state để thể hiện trạng thái mới.
        const updatedData = data.map((item) =>
          item._id === selectedRow._id ? { ...item, status: "BANNED" } : item
        );
        setData(updatedData);

        toast.success("Ban Successful!");

        // Chuyển sang tab "Banned"
        setValue("banned");
      })

      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu PUT lên API:", error);
      })
      .finally(() => {
        setIsBanAlertOpen(false);
      });
  };
  useEffect(() => {
    // Gọi API và cập nhật dữ liệu
    axios
      .get("https://petdom-apis.onrender.com/api/user/staffs?search=")
      .then((response) => {
        setData(response.data);
        console.log("data dau ra", response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
        setIsLoading(false);
      });
  }, []);
  useEffect(() => {
    // Gọi API và cập nhật dữ liệu
    if (value === "banned") {
      axios
        .get("https://petdom-apis.onrender.com/api/user/staffs?search=")
        .then((response) => {
          setData(response.data);
          console.log("data dau ra", response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Lỗi khi gọi API:", error);
          setIsLoading(false);
        });
    }
  }, [value]);

  return (
    <Box width="100%">
      <Tabs value={value} onChange={handleChange} colorScheme="teal">
        <TabList borderBottom="1px" borderColor="gray.200">
          <Tab
            className={`panel_one ${value === "staff" ? "is-active" : ""}`}
            _selected={{ borderBottom: "2px solid red" }}
          >
            Staff
          </Tab>
          <Tab
            className={`panel_one ${value === "banned" ? "is-active" : ""}`}
            _selected={{ borderBottom: "2px solid blue" }}
          >
            Banned
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box width="520px" marginBottom="20px">
              {/* <Searchbar /> */}
            </Box>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Email</Th>
                    <Th>User</Th>
                    <Th>Role</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {isLoading ? (
                    <Tr>
                      <Td colSpan={6}>Đang tải dữ liệu...</Td>
                    </Tr>
                  ) : Array.isArray(data) ? (
                    data.map((row) => (
                      <Tr key={row.email}>
                        <Td fontWeight="700">{row._id}</Td>
                        <Td align="center" fontWeight="700">
                          {row.email}
                        </Td>
                        <Td align="center" fontWeight="700">
                          {row.fullname}
                        </Td>
                        <Td align="center" fontWeight="700">
                          {row.role}
                        </Td>
                        <Td align="center" fontWeight="700">
                          {row.status}
                        </Td>
                        <Td align="center">
                          <Button
                            colorScheme="red"
                            fontWeight="700"
                            textTransform="none"
                            onClick={() => handleBanAlertOpen(row)}
                          >
                            Ban
                          </Button>
                        </Td>
                      </Tr>
                    ))
                  ) : (
                    <Tr>
                      <Td colSpan={6}>Dữ liệu không hợp lệ</Td>
                    </Tr>
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel>
            <Box width="520px" marginBottom="20px">
              {/* <Searchbar /> */}
            </Box>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>PostID</Th>
                    <Th>Date</Th>
                    <Th>Role</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {isLoading ? (
                    <Tr>
                      <Td colSpan={5}>Đang tải dữ liệu...</Td>
                    </Tr>
                  ) : Array.isArray(data) ? (
                    data.map((row) => (
                      <Tr key={row._id}>
                        <Td fontWeight="700">{row.postId}</Td>
                        <Td align="center" fontWeight="700">
                          {row.email}
                        </Td>
                        <Td align="center" fontWeight="700">
                          {row.role}
                        </Td>
                        <Td align="center" fontWeight="700">
                          {row.status}
                        </Td>
                        <Td align="center">
                          <Button
                            onClick={() => handleDetailClick(row)}
                            colorScheme="teal"
                            fontWeight="700"
                            textTransform="none"
                          >
                            Detail
                          </Button>
                        </Td>
                      </Tr>
                    ))
                  ) : (
                    <Tr>
                      <Td colSpan={5}>Dữ liệu không hợp lệ</Td>
                    </Tr>
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* AlertDialog for Ban Confirmation */}
      <AlertDialog
        isOpen={isBanAlertOpen}
        onClose={handleBanAlertClose}
        leastDestructiveRef={undefined}
        autoFocus={false}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Ban User
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to ban this user?
            </AlertDialogBody>

            <AlertDialogFooter>
              <ButtonGroup>
                <Button onClick={handleBanAlertClose}>No</Button>
                <Button colorScheme="red" onClick={handleBanClick} ml={3}>
                  Yes
                </Button>
              </ButtonGroup>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default StaffTable;
