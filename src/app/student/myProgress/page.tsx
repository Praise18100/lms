"use client";
import SectionHeader from "@/components/header/sectionHeader";
import AiLearningPath from "@/components/student/myProgress/aiLearningPath";
import ContentProgress from "@/components/student/myProgress/contentProgress";
import Stats from "@/components/student/myProgress/stats";
import { Flex } from "@chakra-ui/react";

export default function LearningPath() {
  return (
    <Flex direction="column" w="full" px={{ base: 7, md: 9 }}>
      <SectionHeader />
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
      