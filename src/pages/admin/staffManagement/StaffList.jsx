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
  TableHead,
  TableRow,
  useToast,
  Pagination,
} from "@chakra-ui/react";
// import { DetailModal } from "./DetailButton";
// import Searchbar from '../../../layout/LayoutAdmin/Topbar/Searchbar';

const StaffTable = () => {
  const [value, setValue] = useState("pending");
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]); // Dữ liệu từ API
  const [isLoading, setIsLoading] = useState(true);

  const toast = useToast();

  const handleDetailClick = (row) => {
    setSelectedCandidate(row);
    setIsDetailModalOpen(true);
  };

  const handleCloseDetailModal = () => {
    setIsDetailModalOpen(false);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleRejectClick = (row) => {
    // Gửi yêu cầu PUT lên API để đánh dấu rằng mục đã bị từ chối.
    fetch(`https://64a7842d096b3f0fcc8165a8.mockapi.io/pdfAPi/${row.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reject: true }), // Đánh dấu mục là rejected
    })
      .then((response) => {
        if (response.ok) {
          // Cập nhật dữ liệu trong local state để thể hiện trạng thái mới.
          const updatedData = data.map((item) =>
            item.postId === row.postId ? { ...item, reject: true } : item
          );
          setData(updatedData);
          toast({
            title: "Success Notification!",
            position: "top-right",
            status: "success",
          });

          // Kiểm tra xem trạng thái cần chuyển qua "Rejected"
          if (value === "pending") {
            handleChange("rejected");
          }
        } else {
          console.error("Lỗi khi gửi yêu cầu PUT lên API");
        }
      })
      .catch((error) => {
        console.error("Lỗi khi gửi yêu cầu PUT lên API:", error);
      });
  };

  useEffect(() => {
    // Gọi API và cập nhật dữ liệu
    fetch("https://64a7842d096b3f0fcc8165a8.mockapi.io/pdfAPi")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Box width="100%">
      <Tabs value={value} onChange={handleChange} colorScheme="teal">
        <TabList borderBottom="1px" borderColor="gray.200">
          <Tab
            className={`panel_one ${value === "pending" ? "is-active" : ""}`}
            _selected={{ borderBottom: "2px solid red" }}
          >
            Pending
          </Tab>
          <Tab
            className={`panel_one ${value === "rejected" ? "is-active" : ""}`}
            _selected={{ borderBottom: "2px solid blue" }}
          >
            Rejected
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
                    <Th>PostID</Th>
                    <Th>Date</Th>
                    <Th>User</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {isLoading ? (
                    <Tr>
                      <Td colSpan={5}>Đang tải dữ liệu...</Td>
                    </Tr>
                  ) : (
                    data.map((row) => (
                      <Tr key={row.postId}>
                        <Td fontWeight="700">{row.postId}</Td>
                        <Td align="center" fontWeight="700">
                          {row.date}
                        </Td>
                        <Td align="center" fontWeight="700">
                          {row.user}
                        </Td>
                        <Td align="center" fontWeight="700">
                          {row.status}
                        </Td>
                        <Td align="center">
                          <Button
                            onClick={() => handleDetailClick(row)}
                            color="teal.500"
                            fontWeight="700"
                            textTransform="none"
                          >
                            Detail
                          </Button>
                          <Button
                            color="green.500"
                            fontWeight="700"
                            textTransform="none"
                          >
                            Approve
                          </Button>
                          <Button
                            color="red.500"
                            fontWeight="700"
                            textTransform="none"
                            onClick={() => handleRejectClick(row)}
                          >
                            Reject
                          </Button>
                        </Td>
                      </Tr>
                    ))
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
              <Table variant="striped" colorScheme="teal">
                <Thead>
                  <Tr>
                    <Th>PostID</Th>
                    <Th>Date</Th>
                    <Th>User</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {isLoading ? (
                    <Tr>
                      <Td colSpan={5}>Đang tải dữ liệu...</Td>
                    </Tr>
                  ) : (
                    data.map((row) => (
                      <Tr key={row.postId}>
                        <Td fontWeight="700">{row.postId}</Td>
                        <Td align="center" fontWeight="700">
                          {row.date}
                        </Td>
                        <Td align="center" fontWeight="700">
                          {row.user}
                        </Td>
                        <Td align="center" fontWeight="700">
                          {row.status}
                        </Td>
                        <Td align="center">
                          <Button
                            onClick={() => handleDetailClick(row)}
                            color="teal.500"
                            fontWeight="700"
                            textTransform="none"
                          >
                            Detail
                          </Button>
                          <Button
                            color="green.500"
                            fontWeight="700"
                            textTransform="none"
                          >
                            Approve
                          </Button>
                          <Button
                            color="red.500"
                            fontWeight="700"
                            textTransform="none"
                            onClick={() => handleRejectClick(row)}
                          >
                            Reject
                          </Button>
                        </Td>
                      </Tr>
                    ))
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* <DetailModal isOpen={isDetailModalOpen} handleCloseDetailModal={handleCloseDetailModal} row={selectedCandidate} />
      <Pagination
        page={currentPage}
        onChange={handleChangePage}
        showFirstButton
        showLastButton
        style={{
          marginLeft: '930px',
          paddingTop: '10px',
          paddingBottom: '15px',
        }}
      /> */}
    </Box>
  );
};

export default StaffTable;
