"use client";
import Stats from "@/components/pages/instructor/analytics/stats";
import { Flex } from "@chakra-ui/react";
import TopicsStudentsStruggleWith from "@/components/pages/instructor/analytics/topicsStudentsStruggleWith";
import QuizScoresByContents from "@/components/pages/instructor/analytics/quizScoresByContents";
import InstructorSectionHeader from "@/components/header/instructorSectionHeader";

export default function Analytics() {
  return (
    <Flex direction="column" w="full" px={{ base: 7, md: 9 }}>
      <InstructorSectionHeader />
      <Stats />
      <Flex justify={"space-between"} w={"full"} gap={7}>
        <Flex justify={"flex-start"} flex={1}>
          <TopicsStudentsStruggleWith />
        </Flex>
        <Flex justify={"flex-end"} flex={1}>
          <QuizScoresByContents />
        </Flex>
      </Flex>
    </Flex>
  );
}
