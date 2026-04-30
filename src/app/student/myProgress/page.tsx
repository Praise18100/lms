"use client";
import StudentSectionHeader from "@/components/header/studentSectionHeader";
import AiLearningPath from "@/components/pages/student/myProgress/aiLearningPath";
import ContentProgress from "@/components/pages/student/myProgress/contentProgress";
import Stats from "@/components/pages/student/myProgress/stats";
import { Flex } from "@chakra-ui/react";

export default function LearningPath() {
  return (
    <Flex direction="column" w="full" px={{ base: 7, md: 9 }}>
      <StudentSectionHeader />
      <Stats />
      <Flex justify={"space-between"} w={"full"} gap={7}>
        <Flex justify={"flex-start"} flex={1}>
          <ContentProgress />
        </Flex>
        <Flex justify={"flex-end"} flex={1}>
          <AiLearningPath />
        </Flex>
      </Flex>
    </Flex>
  );
}
      