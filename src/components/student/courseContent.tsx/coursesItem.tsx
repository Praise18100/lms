"use client";

import { FiActivity, FiBookOpen } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import { LuDatabase } from "react-icons/lu";
import { Box, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { HiMiniCodeBracket } from "react-icons/hi2";

type CourseItem = {
  icon: IconType;
  label: string;
  duration: string;
  course: string;
  lecturer: string;
  studentCount: string;
  progress: number;
  accentColor: string;
  headerBg: string;
  active?: boolean;
  onClick?: () => void;
};

export const sections: CourseItem[] = [
  {
    icon: FiBookOpen,
    label: "In progress",
    duration: "Week 3/8",
    course: "Intro to Data Structures",
    lecturer: "Dr. Mensah",
    studentCount: "58 students",
    progress: 68,
    accentColor: "primary.500",
    headerBg: "primary.100",
  },
  {
    icon: FiActivity,
    label: "In progress",
    duration: "Week 2/10",
    course: "Algorithms & Complexity",
    lecturer: "Dr. Yusuf",
    studentCount: "49 students",
    progress: 42,
    accentColor: "primary.500",
    headerBg: "primary.100",
  },
  {
    icon: LuDatabase,
    label: "Just started",
    duration: "Week 1/12",
    course: "Database Systems",
    lecturer: "Dr. Ajayi",
    studentCount: "35 students",
    progress: 15,
   accentColor: "primary.500",
    headerBg: "primary.100",
  },
  {
    icon: HiMiniCodeBracket,
    label: "In progress",
    duration: "Week 6/12",
    course: "Software Development",
    lecturer: "Dr. James",
    studentCount: "55 students",
    progress: 51,
   accentColor: "primary.500",
    headerBg: "primary.100",
  },
];
export default function Courses({
  icon,
  label,
  duration,
  course,
  lecturer,
  studentCount,
  progress,
  accentColor,
  headerBg,
  active = false,
  onClick,
}: CourseItem) {
  return (
    <Box
      w="full"
      overflow="hidden"
      borderRadius="18px"
      border="1px solid"
      borderColor="#D7DDE7"
      bg="white"
      color={active ? "primary.900" : "blackAlpha.900"}
      fontWeight={active ? "500" : "400"}
      cursor="pointer"
      onClick={onClick}
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
        bg={headerBg}
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
            fontSize={{base: "2xs", md: "xs"}}
            lineHeight="1"
            fontWeight="700"
            bg={headerBg}
            color={accentColor}
            textTransform="none"
            whiteSpace="nowrap"
          >
            {label}
          </Flex>

          <Text fontSize="13px" lineHeight="1" color="gray.500">
            {duration}
          </Text>
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
            {lecturer} · {studentCount}
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
    </Box>
  );
}
