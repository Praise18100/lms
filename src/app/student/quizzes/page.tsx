"use client";
import StudentSectionHeader from "@/components/header/studentSectionHeader";
import CompletedQuizzes from "@/components/pages/student/quizzes/completedQuizzes";
import PendingQuizzes from "@/components/pages/student/quizzes/pendingQuizzes";
import Stats from "@/components/pages/student/quizzes/stats";
import { Flex } from "@chakra-ui/react";

export default function Quizzes() {
  return (
    <Flex direction="column" w="full" px={{ base: 7, md: 9 }}>
      <StudentSectionHeader />
      <Stats />
      <PendingQuizzes />
      <CompletedQuizzes />
    </Flex>
  );
}