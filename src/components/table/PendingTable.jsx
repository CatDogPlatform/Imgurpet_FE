import React, { useEffect, useState } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import postApi from "../../utils/postAPI";
import { toast } from "react-toastify";

export default function PostRequestPending() {
  const [dataPost, setDataPost] = useState([]);

  useEffect(() => {
    const fetchListUser = async () => {
      try {
        const response = await postApi.getAll({});
        console.log("dataTBL", response);
        setDataPost(response);
      } catch (error) {
        console.log("err", error);
        setDataPost([]);
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Load Data failed !");
        }
      }
    };
    fetchListUser();
    console.log("okeee", dataPost);
  }, []); // Chỉ chạy một lần khi component được mount

  //   useEffect(() => {
  //     console.log("okie", dataPost); // In ra dataPost mỗi khi nó thay đổi
  //   }, [dataPost]);
  return (
    <Box p={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Column 1</Th>
            <Th>Column 2</Th>
            <Th>Column 3</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dataPost &&
            dataPost.map((post) => (
              <Tr key={post._id}>
                <Td>{post.content}</Td>
                <Td>{post.images}</Td>
                <Td>{post.status}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
}
