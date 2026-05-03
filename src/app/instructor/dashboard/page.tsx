"use client";
import ActiveCourses from "@/components/pages/instructor/dashboard/activeCourses";
import TopStudentsQuestions from "@/components/pages/instructor/dashboard/topStudentsQuestions";
import DashboardHeader from "@/components/pages/student/dashboard/dashboardHeader";
import { Flex } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Flex direction="column" w="full" px={5}>
      <DashboardHeader />
      <Flex gap={5} direction= "row">
       <ActiveCourses />
       <TopStudentsQuestions />
      </Flex>
    </Flex>
  );
}