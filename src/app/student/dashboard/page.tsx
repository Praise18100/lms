"use client";

import DashboardHeader from "@/components/pages/student/dashboard/dashboardHeader";
import { Flex, Text } from "@chakra-ui/react";
import Section1 from "@/components/pages/student/dashboard/section1";
import Section2 from "@/components/pages/student/dashboard/section2";

export default function Dashboard() {
  return (
    <Flex direction="column" w="full" px={{ base: 2, md: 4 }}>
      <DashboardHeader />
      <Flex gap={5} direction={{ base: "row", lg: "column" }}>
        <Section1 />
        <Section2 />
      </Flex>
    </Flex>
  );
}
