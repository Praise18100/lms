import { Box, Flex, Text } from "@chakra-ui/react";

type ContentProgress = {
  content: string;
  percentage: number;
};

export const sections: ContentProgress[] = [
  {
    content: "BST quiz",
    percentage: 74,
  },
  {
    content: "BST quiz",
    percentage: 81,
  },
  {
    content: "Arrays quiz",
    percentage: 88,
  },
];

export default function QuizScoresByContents() {
  return (
    <Flex gap={5} w="full">
      <Flex
        w="full"
        h="full"
        borderRadius="18px"
        border="1px solid"
        borderColor="#D7DDE7"
        bg="white"
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
          align="center"
          justify="flex-start"
          borderBottom={"1px solid #E8EBF2"}
          pb={3}
        >
          <Text fontSize="xs" fontWeight="600">
            Quiz scores by content
          </Text>
        </Flex>
        <Flex gap={4} direction={"column"} justify={"space-between"} py={3}>
          {sections.map(({ content, percentage }, index) => (
            <Flex
              key={index}
              direction={"row"}
              borderRadius={"md"}
              gap={3}
              align={"center"}
              //   borderBottom="1px solid"
              //   borderColor="gray.600"
              minW={"80px"}
              pb={2}
              borderBottom={"1px solid #E8EBF2"}
            >
              <Flex justify={"flex-start"} direction={"column"} w={"full"}>
                <Text fontSize={{ base: "2xs", md: "xs" }}>{content}</Text>
              </Flex>

              <Flex align="center" gap={3} justify="flex-start">
                <Box
                  flex="1"
                  h="4px"
                  borderRadius="full"
                  bg="blackAlpha.900"
                  overflow="hidden"
                >
                  <Box
                    h="full"
                    w={percentage}
                    borderRadius="full"
                    bg={"primary.900"}
                  />
                </Box>

                <Text
                  minW="40px"
                  textAlign="right"
                  fontSize={{ base: "2xs", md: "xs" }}
                  fontWeight="700"
                  color="gray.500"
                  whiteSpace="nowrap"
                >
                  {percentage}%
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
