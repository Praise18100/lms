"use client";

import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useNavbarState } from "../navbar/navContext";

type SectionMeta = {
  info: string;
  button?: string;
  href?: string;
};

const sectionMeta: Record<string, SectionMeta> = {
  Dashboard: { info: "Welcome back, Ada" },
  AITutor: { info: "Answering from Your Course Material", button: "Back" },
  Courses: {
    info: "3 enrolled · 2 in progress",
    button: "Browse Courses",
    href: "/courses",
  },
  Quizzes: { info: "2 due this week · 24 completed" },
  LearningPath: { info: "AI-personalised based on your quiz scores and activity" },
  Notes: { info: "12 notes across 3 courses", button: "New Notes", href: "/notes" },
  Profile: { info: "Manage your personal information", button: "Save Changes" },
  Settings: { info: "Manage your preferences", button: "Save" },
};

export default function SectionHeader() {
  const { activeItem } = useNavbarState();
  const meta = sectionMeta[activeItem] ?? { info: "" };

  return (
    <Flex
      w="full"
      h="72px"
      px={{ base: 1, md: 2 }}
      align="center"
      justify="space-between"
      bg="primary.50"
      borderColor="gray.200"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <VStack align="flex-start" gap={0.5}>
        <Text
          fontSize={{ base: "md", lg: "lg" }}
          fontWeight="700"
          color="gray.900"
          textTransform="capitalize"
          lineHeight="1.2"
        >
          {activeItem}
        </Text>

        {meta.info && (
          <Text fontSize="sm" color="gray.500">
            {meta.info}
          </Text>
        )}
      </VStack>

      {meta.button && meta.href && (
        <Link href={meta.href}>
          <Button
            px={4}
            borderRadius="xl"
            colorPalette="primary"
            fontSize={{ base: "xs", md: "sm" }}
          >
            {meta.button}
          </Button>
        </Link>
      )}
    </Flex>
  );
}
