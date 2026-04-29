"use client";
import SectionHeader from "@/components/header/sectionHeader";
import CompletedQuizzes from "@/components/student/quizzes/completedQuizzes";
import PendingQuizzes from "@/components/student/quizzes/pendingQuizzes";
import Stats from "@/components/student/quizzes/stats";
import { Flex } from "@chakra-ui/react";

export default function Quizzes() {
  return (
    <Flex direction="column" w="full" px={{ base: 7, md: 9 }}>
      <SectionHeader />
      <Stats />
      <PendingQuizzes />
      <CompletedQuizzes />
    </Flex>
  );
}