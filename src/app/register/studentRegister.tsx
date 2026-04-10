"use client";
import { Field, Input, Box, Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react/flex";
import { Text } from "@chakra-ui/react/text";

export default function StudentRegister() {
  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap={4}
      my={10}
    >
      <Field.Root>
        <Field.Label>Full Name</Field.Label>
        <Input placeholder="John Doe" p={4} />
      </Field.Root>

      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input placeholder="me@example.com" p={4} />
      </Field.Root>

      <Field.Root>
        <Field.Label>Password</Field.Label>
        <Input placeholder="Min 8 characters" type="password" p={4} />
      </Field.Root>

      <Box p={4} mt={4}>
        <Button asChild type="submit" colorScheme="brand">
          <a href="/login">Create Account</a>
        </Button>
      </Box>

      <Text>
        Already have an account? <a href="/login">Sign in</a>
      </Text>
    </Flex>
  );
}
