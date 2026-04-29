"use client";
import SectionHeader from "@/components/header/sectionHeader";
import Chat from "@/components/student/aiTutor/chat";
import Info from "@/components/student/aiTutor/info";
import { Flex } from "@chakra-ui/react";

export default function AiTutor() {
  return (
    <Flex direction="column" w="full">
      <SectionHeader />
      <Flex direction={"row"} justify={"space-between"} gap={5} mb={6} px={{ base: 5, md: 7 }} w={"full"}>
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