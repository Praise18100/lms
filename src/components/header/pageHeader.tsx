"use client";

import { Box, Flex, Heading, Icon, Input, Text } from "@chakra-ui/react";
import { FiBell, FiSearch } from "react-icons/fi";
import { useNavbarState } from "../navbar/navContext";

export default function Header() {
  const { activeItem } = useNavbarState();

  return (
    <Flex
      w="full"
      h="72px"
      px={{ base: 2, md: 4 }}
      align="center"
      justify="space-between"
      borderBottom="1px solid"
      borderColor="gray.200"
      bg="white"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Heading size={{ base: "md", lg: "lg" }} color="gray.900" textTransform="capitalize">
        {activeItem}
      </Heading>

      <Flex align="center" gap={{ base: 2, md: 4 }}>
        <Box position="relative" w={{ base: "180px", md: "260px" }}>
          <Icon
            as={FiSearch}
            color="gray.500"
            position="absolute"
            left="12px"
            top="50%"
            transform="translateY(-50%)"
            zIndex={1}
          />
          <Input
            placeholder="Search..."
            h="40px"
            pl="36px"
            borderRadius="full"
            borderColor="gray.300"
            bg="gray.50"
            _focusVisible={{ borderColor: "primary.500", boxShadow: "none" }}
          />
        </Box>

        <Box
          w="40px"
          h="40px"
          borderRadius="full"
          border="1px solid"
          borderColor="gray.200"
          bg="white"
          display="grid"
          placeItems="center"
          position="relative"
          cursor="pointer"
        >
          <Icon as={FiBell} color="gray.600" boxSize="18px" />
          <Box
            position="absolute"
            top="9px"
            right="10px"
            w="6px"
            h="6px"
            borderRadius="full"
            bg="red.400"
          />
        </Box>

        <Flex
          w="32px"
          h="32px"
          borderRadius="full"
          bg="#dbe0f0"
          color="primary.900"
          fontWeight="700"
          fontSize="12px"
          align="center"
          justify="center"
          flexShrink={0}
        >
          AO
        </Flex>
      </Flex>
    </Flex>
  );
}
