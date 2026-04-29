import { Box, Flex, Text } from "@chakra-ui/react";

type ContentProgress = {
  content: string;
  progress: string | number;
};

export const sections: ContentProgress[] = [
  {
    content: "Binary search trees",
    progress: "68%",
  },
  {
    content: "Linked lists",
    progress: "Done",
  },
  {
    content: "Arrays",
    progress: "Done",
  },
];

export default function ContentProgress() {
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
            Content Progress
          </Text>
        </Flex>
        <Flex gap={4} direction={"column"} justify={"space-between"} py={3}>
          {sections.map(({ content, progress }, index) => (
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

              <Flex align="center" gap={3} justify="flex-end">
                <Box
                  flex="1"
                  h="4px"
                  borderRadius="full"
                  bg="blackAlpha.900"
                  overflow="hidden"
                >
                  <Box
                    h="full"
                    w={typeof progress === "number" ? `${progress}%` : "100%"}
                    borderRadius="full"
                    bg={progress === "Done" ? "primary.700" : "primary.500"}
                  />
                </Box>

                <Text
                  minW="40px"
                  textAlign="right"
                  fontSize={{ base: "xs", md: "sm" }}
                  fontWeight="700"
                  color="gray.500"
                >
                  {typeof progress === "number" ? `${progress}%` : progress}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
