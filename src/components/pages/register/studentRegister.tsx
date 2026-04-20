"use client";
import { Field, Input, Box, Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react/flex";
import { Text } from "@chakra-ui/react/text";
import Link from "next/link";

export default function StudentRegister() {
  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap={4}
      my={1}
    >
      <Field.Root pt={{ base: 4, md: 8 }}>
        <Field.Label fontSize={{ base: "xs", md: "sm" }} color={"gray.700"}>
          Full Name
        </Field.Label>
        <Input
          placeholder="Ada Okafor"
          p={4}
          borderRadius={"xl"}
          _placeholder={{ color: "gray.500" }}
          fontSize={"xs"}
        />
      </Field.Root>

      <Field.Root pt={{ base: 4, md: 8 }}>
        <Field.Label fontSize={{ base: "xs", md: "sm" }} color={"gray.700"}>
          Email address
        </Field.Label>
        <Input
          placeholder="ada@university.edu"
          p={4}
          borderRadius={"xl"}
          _placeholder={{ color: "gray.500" }}
          fontSize={"xs"}
        />
      </Field.Root>

      <Field.Root>
        <Field.Label fontSize={{ base: "xs", md: "sm" }} color={"gray.700"}>
          Password
        </Field.Label>
        <Input
          placeholder="********"
          type="password"
          p={4}
          borderRadius={"xl"}
          _placeholder={{ color: "gray.500" }}
          fontSize={"xs"}
        />
      </Field.Root>

      <Button
        type="submit"
        p={4}
        mt={4}
        w={"100%"}
        borderRadius={"xl"}
        colorScheme="brand"
        fontSize={{ base: "xs", md: "sm" }}
      >
        <Link href="/login">Create Account</Link>
      </Button>

      <Text
        color={"gray.400"}
        fontSize={{ base: "xs", md: "sm" }}
        justifyContent={"center"}
      >
        Already have an account?{" "}
        <Link href="/login">
          {" "}
          <Text as="span" color="primary.600">
            Sign in
          </Text>
        </Link>
      </Text>
    </Flex>
  );
}
