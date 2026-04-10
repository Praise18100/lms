"use client";
import { Flex } from "@chakra-ui/react/flex";
import { Text } from "@chakra-ui/react/text";

export default function login() {
  return (
    <Flex
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap={4}
      my={10}
    >
      <Text fontWeight={{ base: "md", md: "lg" }}>Create Account</Text>
      <Text fontWeight={{ base: "normal", md: "medium" }}>
        Choose your role to get started
      </Text>

      <Flex direction={"row"} gap={0} my={10} justify={"flex-start"}>
        <Text border={"1px solid black"} p={4} borderRadius={"md"}>
          Student
        </Text>
        <Text border={"1px solid black"} p={4} borderRadius={"md"}>
          Instructor
        </Text>
      </Flex>
    </Flex>
  );
}
