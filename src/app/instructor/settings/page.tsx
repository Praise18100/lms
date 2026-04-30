"use client";

import Accounts from "@/components/pages/student/settings/accounts";
import Notification from "@/components/pages/instructor/settings/notification";
import { Flex } from "@chakra-ui/react";
import InstructorSectionHeader from "@/components/header/instructorSectionHeader";
import AiContentGeneration from "@/components/pages/instructor/settings/aiContentGeneration";

export default function Settings() {
  return (
    <Flex direction="column" w="full" px={5}>
      <InstructorSectionHeader />
      <Flex direction={"row"} gap={5} justify={"space-between"}>
        <Flex justify={"flex-start"} w={"full"} flex={2}>
          <Accounts />
        </Flex>
        <Flex direction={"column"} gap={5} justify={"flex-end"} flex={1}>
          <AiContentGeneration />
          <Notification />
        </Flex>
      </Flex>
    </Flex>
  );
}