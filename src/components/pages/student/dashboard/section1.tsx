import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { FiMessageSquare } from "react-icons/fi";
import { GoBook } from "react-icons/go";

export default function Section1() {
  return (
    <Flex gap={5} >
      <Flex
        w="50%"
        h="full"
        borderRadius="18px"
        border="1px solid"
        borderColor="#D7DDE7"
        bg="white"
        color={"black.900"}
        cursor="pointer"
        p={4}
        direction={"column"}
        transition="transform 0.2s ease, box-shadow 0.2s ease"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
        }}
      >
        <Flex
          justify={"space-between"}
          borderBottom={"1px solid #E8EBF2"}
          pb={4}
        >
          <Flex align="center" justify="flex-start">
            <Text fontSize="xs" fontWeight="600">
              Continue Reading
            </Text>
          </Flex>
          <Flex align="center" justify="flex-end">
            <Text fontSize="xs" color={"primary.500"}>
              view all
            </Text>
          </Flex>
        </Flex>

        <VStack flex={1} alignItems={"start"} gap={2} mt={4}>
          <HStack>
            <Flex
              w="37px"
              h="37px"
              borderRadius="full"
              bg="primary.0"
              color="primary.900"
              fontWeight="700"
              fontSize={{ base: "s", md: "md" }}
              align="center"
              justify="center"
              flexShrink={0}
            >
              <GoBook />
            </Flex>
            <Flex direction="column">
              <Text fontSize="sm" fontWeight="600">
                Binary Search Trees
              </Text>
              <Text fontSize="xs" color="gray.500">
                week 3 · 6 Topics · 68% completed
              </Text>
            </Flex>
          </HStack>

          {/* <Flex direction="row" gap={2}> */}
          <Box
            h="4px"
            w={"full"}
            borderRadius="full"
            bg="#E5E7EB"
            overflow="hidden"
            direction={"column"}
          >
            <Box h="full" w={`68%`} borderRadius="full" bg={"primary.700"} />
          </Box>
          {/* </Flex> */}
        </VStack>
      </Flex>

      <Flex
        w="50%"
        h="fit-content"
        borderRadius="18px"
        border="1px solid"
        borderColor="#D7DDE7"
        bg="white"
        color={"black.900"}
        cursor="pointer"
        p={4}
        direction={"column"}
        transition="transform 0.2s ease, box-shadow 0.2s ease"
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
        }}
      >
        <Flex
          justify={"space-between"}
          borderBottom={"1px solid #E8EBF2"}
          pb={4}
        >
          <Flex align="center" justify="flex-start">
            <Text fontSize="xs" fontWeight="600">
              AI Recomendation
            </Text>
          </Flex>
        </Flex>

        <Flex direction="row" gap={2} mt={4}>
          <Flex
            w="37px"
            h="37px"
            borderRadius="full"
            bg="primary.900"
            color="primary.50"
            fontWeight="700"
            fontSize={{ base: "s", md: "md" }}
            align="center"
            justify="center"
            flexShrink={0}
          >
            <FiMessageSquare />
          </Flex>
          <Flex direction="column" p={2} bg={"primary.50"}>
            <Text fontSize="2xs" fontWeight="600" color={"primary.800"}>
              AI SUGGESTS
            </Text>
            <Text fontSize="xs" color={"primary.950"}>
              Review BST deletion - Your last quiz showed this as a weak area.
              Ask me to explain it step by step
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
