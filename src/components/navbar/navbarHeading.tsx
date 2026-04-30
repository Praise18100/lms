"use client";

import { Avatar, Card, HStack, Text, Badge } from "@chakra-ui/react";
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
    <Card.Root
      py={2}
      px={2}
      mb={2}
      w="full"
      borderWidth="0"
      boxShadow="none"
      whiteSpace="nowrap"
      borderBottom={"1px solid"}
    >
      <Card.Body p={0} >
        <HStack justify="space-between" align="center">
          <HStack gap={2} minW="0">
            <Avatar.Root variant="subtle" size="sm">
              <Avatar.Fallback name={fullname} />
            </Avatar.Root>

            <HStack gap={0} flexDir="column" align="flex-start" minW="0">
              <Text
                fontSize={{ base: "2xs", lg: "xs" }}
                fontWeight="600"
                lineHeight="1.1"
                whiteSpace="nowrap"
              >
                {fullname}
              </Text>
              <Text fontSize={{ base: "2xs", lg: "xs" }} color="gray.500" lineHeight="1.2" textTransform="capitalize">
                {role}
              </Text>
            </HStack>
          </HStack>

          <Badge
            colorPalette="green"
            variant="subtle"
            borderRadius="full"
            fontSize="2xs"
            ml={5}
            px={2}
            flexShrink={0}
          >
            Online
          </Badge>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
}
