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
    info: "Answering from Your Course Material",
    button: "Back",
    href: "/student/dashboard",
  },
  courseContent: {
    feature: "Courses",
    info: "3 enrolled · 2 in progress",
    button: "Browse Courses",
    href: "/courses",
  },
  quizzes: { feature: "Quizzes", info: "2 due this week · 24 completed" },
  learningPath: {
    feature: "Learning Path",
    info: "AI-personalised based on your quiz scores and activity",
  },
  notes: {
    feature: "Notes",
    info: "12 notes across 3 courses",
    button: "New Notes",
    href: "/notes",
  },
  profile: {
    feature: "Profile",
    info: "Manage your personal information",
    button: "Save Changes",
  },
  settings: {
    feature: "Settings",
    info: "Manage your preferences",
    button: "Save",
  },
};

export default function SectionHeader() {
  const { activeId } = useNavbarState();
  const section = sections[activeId] ?? { feature: activeId, info: "" };
  const { feature, info, button, href } = section;
 

  return (
    <Flex
      w="full"
      h="72px"
      px={{ base: 4, md: 6 }}
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
          {feature}
        </Text>

      
          <Text fontSize="sm" color="gray.500">
           {info}
          </Text>
      </VStack>

      {button && href && (
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
      )}
    </Flex>
  );
}
