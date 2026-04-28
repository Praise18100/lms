"use client";

import { Box, Flex } from "@chakra-ui/react";
import { sections } from "../../../components/student/courseContent.tsx/coursesItem";
import CourseItem from "../../../components/student/courseContent.tsx/coursesItem";
import { useRouter } from "next/navigation";
import SectionHeader from "@/components/header/sectionHeader";
import RecentTopics from "@/components/student/courseContent.tsx/recentTopics";

export default function Navbar() {
  const router = useRouter();

  return (
    <Box w={"full"}>
        <SectionHeader />
    <Flex direction="column" w="full" gap={4} p={{ base: 5, md: 7 }}>
      <Flex align="center" justify="space-between" direction={{ base: "column", md: "row" }} gap={3}>
        <Box
          pb="8px"
          w="full"
         
          borderRadius="24px"
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap="12px"
            justifyContent="center"
            align="stretch"
          >
            {sections.map((item) => (
              <Box
                key={item.course}
                w="full"
                minW={0}
              >
                <CourseItem
                  {...item}
                  active={item.active}
                  onClick={() => {
                    router.push(
                      `/${item.label.toLowerCase().replace(/\s/g, "-")}`,
                    );
                  }}
                />
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
      <RecentTopics />
    </Flex>
        </Box>
  );
}
