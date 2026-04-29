"use client";
import SectionHeader from "@/components/header/sectionHeader";
import Accounts from "@/components/student/settings/accounts";
import Notification from "@/components/student/settings/notification";
import AiTutorPreference from "@/components/student/settings/aiTutorPreference";
import { Flex } from "@chakra-ui/react";

export default function Settings() {
  return (
    <Flex direction="column" w="full" px={5}>
      <SectionHeader />
      <Flex direction={"row"} gap={5} justify={"space-between"}>
        <Flex justify={"flex-start"} w={"full"}>
          <Accounts />
        </Flex>
        <Flex direction={"column"} gap={5} justify={"flex-end"}>
          <AiTutorPreference />
          <Notification />
        </Flex>
      </Flex>
    </Flex>
  );
}