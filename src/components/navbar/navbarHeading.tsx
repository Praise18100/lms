"use client";

import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import { getSessionUser } from "@/app/actions/login";
import { useEffect, useState } from "react";

export default function NavbarHeading() {
  const [fullname, setFullname] = useState("User");
  const [role, setRole] = useState("");

  useEffect(() => {
    getSessionUser().then((user) => {
      if (user) {
        setFullname(user.name);
        setRole(user.role);
      }
    });
  }, []);

  return (
    <Flex>
      <Box>
        <Flex
          py={4}
          align="center"
          justify="space-between"
         borderBottom="1px solid #e8ebf2"
          mb={4}
          gap="10px"
        >
          <HStack gap="10px" minW="0">
            <Flex
              w="32px"
              h="full"
              borderRadius="full"
              bg="#dbe0f0"
              color="primary.900"
              fontWeight="700"
             fontSize={{ base: "xs", lg: "sm"}}
              align="center"
              justify="center"
              flexShrink={0}
            >
             <Avatar.Root variant={"subtle"}>
            <Avatar.Fallback name={fullname} />
          </Avatar.Root>
            </Flex>

            <Box minW="0">
              <Text
                fontSize={{ base: "2xs", lg: "xs"}}
                fontWeight="600"
                lineHeight="1.1"
                whiteSpace="nowrap"
              >
                {fullname}
              </Text>
              <Text fontSize={{ base: "2xs", lg: "xs"}} color="gray.500" lineHeight="1.2">
                {role}
              </Text>
            </Box>
          </HStack>

          <Flex
            px="8px"
            h="20px"
            borderRadius="999px"
            align="center"
            justify="center"
            bg="green.100"
            color="green.600"
            fontWeight="700"
            fontSize="2xs"
            letterSpacing="0.06em"
            textTransform="uppercase"
            flexShrink={0}
          >
            Online
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
