"use client";

import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useNavbarState } from "../navbar/navContext";

type SectionItem = {
  feature: string;
  info: string;
  button?: string;
  href?: string;
};

const sections: Record<string, SectionItem> = {
  aiTutor: {
    feature: "AI Tutor",
    info: "Answers from your course material only — guided learning mode",
    button: "Back",
    href: "/student/dashboard",
  },
  courseContent: {
    feature: "Course Content",
    info: "4 enrolled · 3 in progress",
    button: "Browse Courses",
    href: "/courses",
  },
  quizzes: { feature: "Quizzes", info: "2 due this week · 24 completed" },
  myProgress: {
    feature: "My Progress",
    info: "AI-tracked learning journey",
  },
  settings: {
    feature: "Settings",
    info: "Manage your account and preferences",
    button: "Save",
  },
};

export default function StudentSectionHeader() {
  const { activeId } = useNavbarState();
  const section = sections[activeId] ?? { feature: activeId, info: "" };
  const { feature, info, button, href } = section;

  return (
    <Flex
      w="full"
      h="72px"
      px={{ base: 2, md: 4 }}
      align="center"
      justify="space-between"
      bg="primary.50"
      borderColor="gray.200"
      position="sticky"
      top={0}
      // zIndex={10}
    >
      <VStack align="flex-start" gap={0.5}>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="700"
          color="gray.900"
          textTransform="capitalize"
          lineHeight="1.2"
        >
          {feature}
        </Text>

        <Text fontSize="xs" color="gray.500">
          {info}
        </Text>
      </VStack>

      {href && button ? (
        <Link href={href}>
          <Button
            px={4}
            borderRadius="xl"
            colorPalette="primary"
            fontSize={{ base: "xs", md: "sm" }}
          >
            {button}
          </Button>
        </Link>
      ) : button ? (
        <Button
          px={4}
          borderRadius="xl"
          colorPalette="primary"
          fontSize={{ base: "xs", md: "sm" }}
        >
          {button}
        </Button>
        ) : null}
    </Flex>
  );
}
