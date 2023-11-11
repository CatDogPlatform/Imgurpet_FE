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
  const [value, setValue] = useState("staff");
  const [staffData, setStaffData] = useState([]);
  const [bannedData, setBannedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isBanAlertOpen, setIsBanAlertOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isBanPending, setIsBanPending] = useState(false);

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
    setIsBanPending(true);

    userApi
      .bannedUser(selectedRow._id)
      .then((response) => {
        // Remove the banned user from staffData
        const updatedStaffData = staffData.filter(
          (item) => item._id !== selectedRow._id
        );
        setStaffData(updatedStaffData);

        // Add the banned user to bannedData
        const updatedBannedData = [
          ...bannedData,
          { ...selectedRow, status: "BANNED" },
        ];
        setBannedData(updatedBannedData);

        // Update Local Storage
        localStorage.setItem("bannedData", JSON.stringify(updatedBannedData));

        toast.success("Ban Successful!");

        setValue("banned");
      })
      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu PUT lên API:", error);
      })
      .finally(() => {
        setIsBanPending(false);
        setIsBanAlertOpen(false);
      });
  };

  const handleUnbanClick = () => {
    userApi
      .unBannedUser(selectedRow._id)
      .then((response) => {
        const updatedBannedData = bannedData.filter(
          (item) => item._id !== selectedRow._id
        );
        setBannedData(updatedBannedData);

        const updatedStaffData = [
          ...staffData,
          { ...selectedRow, status: "ACTIVE" },
        ];
        setStaffData(updatedStaffData);

        // Update Local Storage
        localStorage.setItem("bannedData", JSON.stringify(updatedBannedData));
        localStorage.setItem("staffData", JSON.stringify(updatedStaffData));

        toast.success("Unban Successful!");

        setValue("staff");
      })
      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu PUT lên API:", error);
      })
      .finally(() => {
        setIsBanPending(false);
        setIsBanAlertOpen(false);
      });
  };

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await axios.get(
          "https://petdom-apis.onrender.com/api/user/staffs?search="
        );
        setStaffData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        setIsLoading(false);
      }
    };

    fetchStaffData();
  }, []);

  useEffect(() => {
    const fetchBannedData = async () => {
      if (value === "banned") {
        // Try to get bannedData from Local Storage
        const storedBannedData = localStorage.getItem("bannedData");
        if (storedBannedData) {
          setBannedData(JSON.parse(storedBannedData));
          setIsLoading(false);
        } else {
          // If not available, fetch data from API
          try {
            const response = await axios.get(
              "https://petdom-apis.onrender.com/api/staffs/banned?search="
            );
            setBannedData(response.data);
            setIsLoading(false);
            // Update Local Storage
            localStorage.setItem("bannedData", JSON.stringify(response.data));
          } catch (error) {
            console.error("Lỗi khi gọi API:", error);
            setIsLoading(false);
          }
        }
      }
    };

    fetchBannedData();
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
                  ) : Array.isArray(staffData) && staffData.length > 0 ? (
                    staffData.map((row) => (
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
                      <Td colSpan={5}>Đang tải dữ liệu...</Td>
                    </Tr>
                  ) : Array.isArray(bannedData) && bannedData.length > 0 ? (
                    bannedData.map((row) => (
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
                            colorScheme="teal"
                            fontWeight="700"
                            textTransform="none"
                            onClick={() => handleUnbanClick(row)}
                          >
                            Unban
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
              {isBanPending
                ? "Đang thực hiện ban..."
                : "Are you sure you want to ban this user?"}
            </AlertDialogBody>

            <AlertDialogFooter>
              <ButtonGroup>
                <Button onClick={handleBanAlertClose}>No</Button>
                {!isBanPending && (
                  <Button colorScheme="red" onClick={handleBanClick} ml={3}>
                    Yes
                  </Button>
                )}
              </ButtonGroup>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default StaffTable;
