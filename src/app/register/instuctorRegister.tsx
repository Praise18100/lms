"use client";
import Button from "@/components/ui/button";
import { Field, Input } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react/flex";
import { Text } from "@chakra-ui/react/text";

export default function InstructorRegister() {
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
          <Input placeholder="John Doe" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input placeholder="me@example.com" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Password</Field.Label>
          <Input placeholder="Min 8 characters" type="password" />
        </Field.Root>

        <Field.Root>
          <Field.Label>Instructor Invite Code</Field.Label>
          <Input placeholder="INV-XXXX-XXXX" />
        </Field.Root>

        <a href="/login">
          <Button type="submit">
           Create Account
          </Button>
        </a>
          
          <Text>Already have an account? <a href="/login">Sign in</a></Text>
        </Flex>
  );
}
