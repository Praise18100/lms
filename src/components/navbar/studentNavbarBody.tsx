import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { FiMessageSquare, FiSettings } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import { IconType } from "react-icons/lib";
import { IoReorderThreeOutline } from "react-icons/io5";
import { LiaUserSolid } from "react-icons/lia";
import { LuClock4 } from "react-icons/lu";
import { PiSquaresFourLight, PiWaveSawtooth } from "react-icons/pi";

type NavItem = {
  label: string;
  icon: IconType;
  count?: number;
  id: string;
  active?: boolean;
  onClick?: () => void;
};

type NavSection = {
  heading: string;
  items: NavItem[];
};

export const sections: NavSection[] = [
  {
    heading: "Main",
    items: [
      { label: "Dashboard", icon: PiSquaresFourLight, id: "dashboard" },
      { label: "AI Tutor", icon: FiMessageSquare, count: 3, id: "aiTutor" },
    ],
  },
  {
    heading: "Learning",
    items: [
      { label: "Course content", icon: GoBook, count: 3, active: true, id: "courseContent" },
      { label: "Quizzes", icon: LuClock4, count: 2, id: "quizzes" },
      { label: "Learning path", icon: PiWaveSawtooth, id: "learningPath" },
      { label: "Notes", icon: IoReorderThreeOutline, id: "notes" },
    ],
  },
  {
    heading: "Account",
    items: [
      { label: "Profile", icon: LiaUserSolid, id: "profile" },
      { label: "Settings", icon: FiSettings, id: "settings" },
    ],
  },
];

export function SidebarItem({ label, icon, count, active = false, onClick }: NavItem) {
  return (
    <Flex
      align="center"
      justify="space-between"
      w="full"
      py="8px"
      borderRadius="10px"
      color={active ? "primary.900" : "blackAlpha.900"}
      bg={active ? "primary.100" : "transparent"}
      fontWeight={active ? "500" : "400"}
      cursor="pointer"
      onClick={onClick}
      transition="background 0.2s ease"
      _hover={{ bg: active ? "primary.200" : "gray.200" }}
    >
      <HStack gap={3} px={2}>
        <Icon
          as={icon}
          boxSize="16px"
          color={active ? "primary.900" : "gray.500"}
        />
        <Text fontSize={{ base: "2xs", lg: "xs"}} lineHeight="0.5">
          {label}
        </Text>
      </HStack>

      <Box display={count ? "block" : "none"}>
        <Flex align="flex-end" justify="flex-end" gap="6px">
          <Flex
            minW="20px"
            h="20px"
            px={1}
            borderRadius="full"
            align="center"
            justify="center"
            fontSize={{ base: "2xs", lg: "xs" }}
            fontWeight="700"
            bg={active ? "primary.900" : "#edf0f6"}
            color={active ? "white" : "gray.700"}
          >
            {count}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
