import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Chat() {
  return (
    <Flex
      w={"full"}
      justify={"flex-start"}
      direction={"column"}
      border={"1px solid"}
      borderTopRadius={"20px"}
      borderColor={"primary.700"}
    >
      <Flex
        direction={"row"}
        w={"full"}
        bg={"primary.900"}
        p={4}
        borderTopRadius={"20px"}
        border={"1px solid"}
        justify={"space-between"}
      >
        <Flex justify={"flex-start"} align={"center"}>
          <Text fontSize="sm" color={"white"} fontWeight={"600"}>
            GoldAI — guided tutor
          </Text>
        </Flex>
        <Flex justify={"flex-end"} align={"center"}>
          <Text
            fontSize="xs"
            bg={"primary.100"}
            p={2}
            borderRadius={"20px"}
            color={"primary.800"}
          >
            BST · Week 3
          </Text>
        </Flex>
      </Flex>

      <Flex
        bg={"primary.200"}
        justify={"space-between"}
        direction={"column"}
        h={"full"}
        py={4}
      >
        <Flex
          bg={"white"}
          p={2.5}
          justify={"flex-start"}
          m={5}
          borderRadius={"18px"}
        >
          <Text fontSize={{ base: "xx-small", md: "xs" }}>
            Hi Ada! I'm your AI tutor for Data Structures. I've read all your
            course material from Weeks 1–3. What would you like to understand
            today?
          </Text>
        </Flex>
        <Flex
          bg={"primary.900"}
          p={2.5}
          w={"fit"}
          justify={"self-end"}
          m={5}
          ml={"auto"}
          borderRadius={"18px"}
        >
          <Text color={"white"} fontSize={{ base: "xx-small", md: "xs" }}>
            I don't understand BST deletion when a node has two children
          </Text>
        </Flex>
        <Flex
          bg={"white"}
          p={2.5}
          justify={"flex-start"}
          m={5}
          borderRadius={"18px"}
        >
          <Text fontSize={{ base: "xx-small", md: "xs" }}>
            Great question — this is the trickiest deletion case! When the node
            has two children, we can't just remove it because we'd break the BST
            structure. Here's the key idea from your Week 3 notes: find the
            in-order successor — the smallest value in the right subtree. Copy
            its value into the node you want to delete, then delete the
            successor instead. Think of it like replacing a manager who's
            leaving — you promote the next most qualified person rather than
            leaving the role empty. Want me to walk through a concrete example
            with numbers?
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
