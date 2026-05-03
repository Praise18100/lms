"use client";

import { FiActivity, FiBookOpen } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { LuDatabase } from "react-icons/lu";
import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { HiMiniCodeBracket } from "react-icons/hi2";

type CourseItem = {
  icon: IconType;
  label: string;
  course: string;
  studentCount: string;
  progress: number;
  accentColor: string;
  headerBg: string;
};

export const sections: CourseItem[] = [
  {
    icon: FiBookOpen,
    label: "Generated today",
    course: "Intro to Data Structures",
    studentCount: "58 students",
    progress: 68,
    accentColor: "primary.500",
    headerBg: "primary.100",
  },
  {
    icon: FiActivity,
    label: "Genrated 2 days ago",
    course: "Algorithms & Complexity",
    studentCount: "49 students",
    progress: 42,
    accentColor: "primary.500",
    headerBg: "primary.100",
  },
  {
    icon: LuDatabase,
    label: "Just started",
    course: "Database Systems",
    studentCount: "35 students",
    progress: 15,
    accentColor: "primary.500",
    headerBg: "primary.100",
  },
  {
    icon: HiMiniCodeBracket,
    label: "In progress",
    course: "Software Development",
    studentCount: "55 students",
    progress: 51,
    accentColor: "primary.500",
    headerBg: "primary.100",
  },
];
export default function Content() {
  return (
    <Flex
      align={"center"}
      w={"full"}
      pb={{ base: 8, md: 10 }}
      pt={{ base: 1, md: 2 }}
    >
      {sections.map(({icon, label, course, headerBg, studentCount, progress, accentColor, }, index) => (
        <Flex
           key={index}
          direction={"column"}
          align={"center"}
          justify={"flex-end"}
          bg={"primary.800"}
          borderRadius={"25px"}
          border={"1px solid"}
          borderColor={"primary.900"}
          borderWidth={"9"}
          p={4}
          w={"full"}
          flex={1}
          transition="transform 0.2s ease, box-shadow 0.2s ease"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
          }}
        >
          <Flex
            h="78px"
            align="center"
            justify="center"
            // bg={active ? "primary.700" : "primary.900"}
            color={accentColor}
          >
            <Icon as={icon} boxSize={8} strokeWidth={2.1} />
          </Flex>

          <VStack gap={0} align="stretch" px={4} pt={3} pb={4}>
            <Flex align="center" justify="space-between" gap={3} mb={2.5}>
              <Flex
                px={2.5}
                py="5px"
                borderRadius="full"
                align="center"
                justify="center"
                fontSize={{ base: "2xs", md: "xs" }}
                lineHeight="1"
                fontWeight="700"
                bg={headerBg}
                color={accentColor}
                textTransform="none"
                whiteSpace="nowrap"
              >
                {label}
              </Flex>
            </Flex>

            <VStack align="stretch" gap={0.5} mb={4}>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.18"
                fontWeight="700"
                letterSpacing="-0.02em"
              >
                {course}
              </Text>
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                lineHeight="1.4"
                color="gray.500"
              >
                {studentCount}
              </Text>
            </VStack>

            <Flex align="center" gap={3}>
              <Box
                flex="1"
                h="4px"
                borderRadius="full"
                bg="#E5E7EB"
                overflow="hidden"
              >
                <Box
                  h="full"
                  w={`${progress}%`}
                  borderRadius="full"
                  bg={accentColor}
                />
              </Box>

              <Text
                minW="40px"
                textAlign="right"
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="700"
                color="gray.500"
              >
                {progress}%
              </Text>
            </Flex>
          </VStack>
        </Flex>
      ))}
    </Flex>
  );
}
