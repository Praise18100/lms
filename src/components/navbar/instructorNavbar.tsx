"use client";

import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import NavbarHeading from "./navbarHeading";
import { SidebarItem } from "./instructorNavbarBody";
import { sections } from "./instructorNavbarBody";
import { useNavbarState } from "./navContext";
import { useRouter } from "next/navigation";
import Logo from "../logo";


export default function InstructorNavbar() {
  const { activeId } = useNavbarState();
  const router = useRouter();

  return (
    <Flex
      direction="column"
      justify="space-between"
      w="35vh"
      h="100vh"
      // bg="primary.50"
      border="10px solid gray.900"
      borderWidth="0 1px"
      borderRadius="0 0 20px 20px"
      overflow="hidden"
      py={7}
      px={5}
    >
      <Flex borderBottom="1px solid #e8ebf2">
        <Logo />
      </Flex>
        <NavbarHeading  />
        <Flex
          pb="14px"
          align="center"
          justify="space-between"
          borderBottom="1px solid #e8ebf2"
          gap={2}
        >

        <Box pb="8px">
          {sections.map((section) => (
            <Box key={section.heading} mb="12px">
              <Text
                mb={0.5}
                fontSize={{ base: "2xs", lg: "xs"}}
                fontWeight="700"
                color="gray.500"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                {section.heading}
              </Text>

              <Flex direction="column" gap="2px">
                {section.items.map((item) => (
                  <SidebarItem
                    key={item.id}
                    {...item}
                    active={activeId === item.id}
                    onClick={() => { router.push(`/instructor/${item.id}`); }}
                    
                  />
                ))}
              </Flex>
            </Box>
          ))}
        </Box>
    </Flex>
    {/* Sign Out */}
          <Flex
            align="center"
            gap="10px"
            px={2}
            py="8px"
            borderRadius="10px"
            color="#ef4444"
            cursor="pointer"
            _hover={{ bg: "#fff0f0" }}
          >
            <Icon as={FiLogOut} boxSize="16px" />
            <Text fontSize={{ base: "2xs", lg: "xs"}} fontWeight="500">
              Sign out
            </Text>
          </Flex>

    </Flex>
  );
}
