import React from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import PostRequestPending from "../../components/table/PendingTable";
import PostRequestAccept from "../../components/table/AcceptTable";
import PostRequestReject from "../../components/table/RejectTable";

export default function PostList() {
  return (
    <Box p={4}>
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Pending</Tab>
          <Tab>Accept</Tab>
          <Tab>Reject</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <PostRequestPending />
          </TabPanel>
          <TabPanel>
            <PostRequestAccept />
          </TabPanel>
          <TabPanel>
            <PostRequestReject />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
