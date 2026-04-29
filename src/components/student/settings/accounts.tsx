"use client";

import { Avatar, Box, Field, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { getSessionUser } from "@/app/actions/login";
import { useEffect, useState } from "react";

export default function Accounts() {
  const [fullname, setFullname] = useState("User");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    getSessionUser().then((user) => {
      if (user) {
        setFullname(user.name);
        setEmail(user.email);
        setRole(user.role);
      }
    });
  }, []);

  return (
    <Box
      bg="white"
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.200"
      p={6}
      w="full"
      flexShrink={0}
    >
      <Text fontWeight="700" fontSize="lg" mb={5} color="gray.900">
        Account
      </Text>

      {/* Avatar + name/email */}
      <Flex align="center" gap={3} mb={6}>
        <Flex
          w="32px"
          h="full"
          borderRadius="full"
          bg="#dbe0f0"
          color="primary.900"
          fontWeight="700"
          fontSize={{ base: "xs", lg: "sm" }}
          align="center"
          justify="center"
          flexShrink={0}
        >
          <Avatar.Root variant="subtle">
            <Avatar.Fallback name={fullname} />
          </Avatar.Root>
        </Flex>
        <Box>
          <Text fontWeight="600" fontSize="sm" color="gray.900">
            {fullname}
          </Text>
          <Text fontSize="xs" color="blue.500">
            {email}
          </Text>
        </Box>
      </Flex>

      <VStack gap={4} align="stretch">
        <Field.Root>
          <Field.Label fontSize="sm" fontWeight="500" color="gray.700" mb={1}>
            Full name
          </Field.Label>
          <Input
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
            borderColor="gray.200"
            p={4}
            borderRadius="xl"
            fontSize="xs"
            _focusVisible={{ borderColor: "primary.500", boxShadow: "none" }}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label fontSize="sm" fontWeight="500" color="gray.700" mb={1}>
            Email
          </Field.Label>
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            borderRadius="xl"
            p={4}
            borderColor="gray.200"
            fontSize="sm"
            _focusVisible={{ borderColor: "primary.500", boxShadow: "none" }}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label fontSize="sm" fontWeight="500" color="gray.700" mb={1}>
            Role
          </Field.Label>
          <Input
            value={role}
            readOnly
            borderRadius="xl"
            p={4}
            borderColor="gray.200"
            fontSize="sm"
            _focusVisible={{ borderColor: "primary.500", boxShadow: "none" }}
          />
        </Field.Root>

        <Field.Root>
          <Field.Label fontSize="sm" fontWeight="500" color="gray.700" mb={1}>
            New password
          </Field.Label>
          <Input
            placeholder="Change password..."
            type="password"
            defaultValue=""
            borderRadius="xl"
            p={4}
            borderColor="gray.200"
            fontSize="sm"
            _focusVisible={{ borderColor: "primary.500", boxShadow: "none" }}
          />
        </Field.Root>
      </VStack>
    </Box>
  );
}
