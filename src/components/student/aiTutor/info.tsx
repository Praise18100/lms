import { Flex, Text } from "@chakra-ui/react";

export default function Info() {
  return (
    <Flex
      direction={"column"}
      w={"full"}
      justify={"flex-start"}
      gap={7}
      p={3}
      transition="transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
      }}
    >
      <Flex
        direction={"column"}
        bg={"white"}
        borderRadius={"18px"}
        border={"1px solid"}
        borderColor={"primary.300"}
        p={5}
        gap={2}
        w={"full"}
      >
        <Flex
          align="center"
          justify="flex-start"
          borderBottom={"1px solid #E8EBF2"}
          pb={2}
        >
          <Text fontSize="xs" fontWeight="600">
            Topic
          </Text>
        </Flex>
        <Flex direction={"column"} gap={1}>
          <Text fontSize="sm" fontWeight="600">
            BST deletion
          </Text>
          <Text fontSize="xs" color="gray.500">
            Week 3, Section 4
          </Text>

          <Flex
            direction={"column"}
            p={2}
            bg={"primary.200"}
            borderRadius={"12px"}
            gap={1}
            w={"100%"}
          >
            <Text fontSize="xs" fontWeight="600" color={"primary.800"}>
              Weak Area
            </Text>
            <Text fontSize="lg" fontWeight="600" color={"primary.800"}>
              55%
            </Text>
            <Text fontSize="xs" color={"primary.800"}>
              last quiz score
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        direction={"column"}
        borderRadius={"18px"}
        border={"1px solid"}
        borderColor={"primary.300"}
        p={5}
        bg={"white"}
        gap={2}
        w={"full"}
      >
        <Flex
          align="center"
          justify="flex-start"
          borderBottom={"1px solid #E8EBF2"}
          pb={2}
        >
          <Text fontSize="xs" fontWeight="600">
            Try next
          </Text>
        </Flex>
        <Flex direction={"column"} gap={3} w={"100%"}>
          <Text
            fontSize="xs"
            bg={"gray.100"}
            p={2}
            borderRadius={"12px"}
            color={"primary.800"}
          >
            Take BST Quiz 2
          </Text>
          <Text
            fontSize="xs"
            bg={"gray.100"}
            borderRadius={"12px"}
            color={"primary.800"}
          >
            AVL trees — self-balancing
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
