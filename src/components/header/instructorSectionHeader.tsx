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
  uploadContent: {
    feature: " Upload course content",
    info: "Upload any file — AI transforms it into structured, student-ready learning material",
  },
  aiProcessing: {
    feature: "AI Processing",
    info: "Transforming your upload into structured learning content",
  },
  contentLibrary: {
    feature: "Content Library",
    info: "5 AI-generated pieces ready for students",
  },
  quizBuilder: {
    feature: "Quiz Builder",
    info: "AI generates quiz questions directly from your uploaded content",
    button: "Generate Quiz",
  },
  students: {
    feature: " Students",
    info: "38 enrolled in Data Structures",
    button: "Export CSV",
  },
  analytics: {
    feature: "Analytics",
    info: "AI-powered insights from student activity",
    button: "Export",
  },
  settings: {
    feature: "Settings",
    info: "Manage your account and preferences",
    button: "Save",
  },
};

export default function InstructorSectionHeader() {
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
