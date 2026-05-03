"use client";
import { Flex } from "@chakra-ui/react";
import ProcessingHistory from "@/components/pages/instructor/aiProcessing/processingHistory";
import AIProcessing from "@/components/pages/instructor/aiProcessing/processing";
import InstructorSectionHeader from "@/components/header/instructorSectionHeader";

export default function Page() {
  return (
     <Flex minH="100vh" w="full" direction={"column"} justify="flex-start" p={7}>
      <InstructorSectionHeader />
    <Flex align="center" direction={"column"} gap={8} w="full" justify="flex-start">
      <AIProcessing />
      <ProcessingHistory />
    </Flex>
     </Flex>
  );
}