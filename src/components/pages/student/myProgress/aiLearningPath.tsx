import { Box, Flex, Text } from "@chakra-ui/react";

type ContentProgress = {
  path: string;
  button: string;
};

export const sections: ContentProgress[] = [
  {
    path: "Review BST deletion — weak area",
    button: "Now",
  },
  {
    path: "Finish Week 3 BST content",
    button: "Next",
  },
  {
    path: "Arrays",
    button: "Soon",
  },
];

export default function AiLearningPath() {
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
            AI learning path
          </Text>
        </Flex>
        <Flex gap={4} direction={"column"}  justify={"space-between"} py={3}>
          {sections.map(({ path, button }, index) => (
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
                <Text fontSize={{ base: "2xs", md: "xs" }}>{path}</Text>
              </Flex>

              <Flex align="center" gap={3} justify="flex-end">
                <Flex
            px={2.5}
            py="5px"
            borderRadius="full"
            align="center"
            justify="center"
            fontSize={{base: "2xs", md: "xs"}}
            lineHeight="1"
            fontWeight="700"
            bg="primary.100"
            color="primary.900"
            textTransform="none"
            whiteSpace="nowrap"
          >
            {button}
          </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
