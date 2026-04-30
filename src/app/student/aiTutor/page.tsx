"use client";
import StudentSectionHeader from "@/components/header/studentSectionHeader";
import Chat from "@/components/pages/student/aiTutor/chat";
import Info from "@/components/pages/student/aiTutor/info";
import { Flex } from "@chakra-ui/react";

export default function AiTutor() {
  return (
    <Flex direction="column" w="full">
      <StudentSectionHeader />
      <Flex
        direction={"row"}
        justify={"space-between"}
        gap={5}
        mb={6}
        px={{ base: 5, md: 7 }}
        w={"full"}
      >
        <Flex justify={"flex-start"} flex={4} h={"full"}>
          <Chat />
        </Flex>
        <Flex justify={"flex-end"} flex={1}>
          <Info />
        </Flex>
      </Flex>
    </Flex>
  );
}
