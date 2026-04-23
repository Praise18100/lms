import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { FiBarChart2, FiMessageSquare, FiSettings, FiUpload } from "react-icons/fi";
import { GoBook } from "react-icons/go";
import { IconType } from "react-icons/lib";
import { LiaUserSolid } from "react-icons/lia";
import { LuClock4, LuUsers } from "react-icons/lu";
import { PiSquaresFourLight } from "react-icons/pi";

type NavItem = {
  label: string;
  icon: IconType;
  id: string;
  count?: number;
  active?: boolean;
};

type NavSection = {
  heading: string;
  items: NavItem[];
};

export const sections: NavSection[] = [
  {
    heading: "Main",
    items: [
      { label: "Overview", icon: PiSquaresFourLight, id: "overview" },
      { label: "AI Assistant", icon: FiMessageSquare, id: "aiAssistant" },
    ],
  },
  {
    heading: "Learning",
    items: [
      { label: "Courses", icon: GoBook, count: 3, active: true, id: "courses" },
      { label: "Content", icon: FiUpload, count: 8, id: "content" },
      { label: "Students", icon: LuUsers, count: 142, id: "students" },
      { label: "Quizzes", icon: LuClock4, count: 6, id: "quizzes" },
    ],
  },
  {
    heading: "Analytics",
    items: [
      { label: "Reports", icon: FiBarChart2, id: "reports" },
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

export function SidebarItem({ label, icon, count, active = false }: NavItem) {
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
      transition="background 0.2s ease"
      _hover={{ bg: active ? "primary.200" : "gray.200" }}
    >
      <HStack gap={3} px={2}>
        <Icon
          as={icon}
          boxSize="16px"
          color={active ? "primary.900" : "gray.500"}
        />
        <Text fontSize={{ base: "xs", lg: "sm" }} lineHeight="1">
          {label}
        </Text>
      </HStack>

      <Box display={count ? "block" : "none"}>
        <Flex align="flex-end" justify="flex-end" gap="6px">
          <Flex
            minW="20px"
            h="20px"
            px="6px"
            borderRadius="full"
            align="center"
            justify="center"
            fontSize={{ base: "xs", lg: "sm" }}
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
