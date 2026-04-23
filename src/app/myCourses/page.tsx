"use client";

import { Box, Flex } from "@chakra-ui/react";
import { sections } from "../../components/myCourses/coursesBody";
import CourseItem from "../../components/myCourses/coursesBody";
import { useRouter } from "next/navigation";
import SectionHeader from "@/components/header/sectionHeader";

export default function Navbar() {
  const router = useRouter();

  return (
    <Flex direction="column" w="full" px={0}>
      <SectionHeader />
      <Flex py={4} align="center" justify="space-between">
        <Box
          pb="8px"
          w="full"
         
          borderRadius="24px"
          p={{ base: 3, md: 4 }}
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
    </Flex>
  );
}
