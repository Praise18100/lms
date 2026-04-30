"use client";
import Stats from "@/components/pages/instructor/students/stats";
import { Flex } from "@chakra-ui/react";
import StudentRoster from "@/components/pages/instructor/students/studentRoster";
import InstructorSectionHeader from "@/components/header/instructorSectionHeader";

export default function Students() {
  return (
    <Flex direction="column" w="full" px={{ base: 7, md: 9 }}>
      <InstructorSectionHeader />
      <Stats />
     <StudentRoster />
    </Flex>
  );
}
      