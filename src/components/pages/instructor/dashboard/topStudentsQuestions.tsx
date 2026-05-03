import { Flex, Text } from "@chakra-ui/react";

type StudentRoster = {
  rank: number;
  count: number;
  question: string;
};

export const sections: StudentRoster[] = [
  {
    rank: 1,
    count: 72,
    question: "How does BST delection work with two children?",
  },
  {
    rank: 2,
    count: 53,
    question: "What is Big O notation?",
  },
  {
    rank: 3,
    count: 38,
    question: "Differnce between a stack and a queue?",
  },
  {
    rank: 4,
    count: 29,
    question: "How do linked list pointers work?",
  },
];

export default function TopStudentsQuestions() {
  return (
    <Flex gap={5}>
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
          justify={"space-between"}
          borderBottom={"1px solid #E8EBF2"}
          pb={4}
          px={3}
        >
          <Flex align="center" justify="flex-start">
            <Text fontSize="xs" fontWeight="600">
              Top student questions this week
            </Text>
          </Flex>
          <Flex
            align="center"
            justify="flex-end"
            textTransform="none"
            whiteSpace="nowrap"
            px={2.5}
            py="5px"
            // bg="primary.100"
            // lineHeight="1"
            borderRadius="full"
          >
            <Text
              fontSize={{ base: "2xs", md: "xs" }}
              color={"primary.900"}
              fontWeight={"600"}
            >
              See all
            </Text>
          </Flex>
        </Flex>

        <Flex gap={4} direction={"column"} justify={"space-between"} py={3}>
          {sections.map(({ rank, count, question }, index) => (
            <Flex
              key={index}
              direction={"row"}
              borderRadius={"md"}
              gap={3}
              align={"center"}
              //   borderBottom="1px solid"
              //   borderColor="gray.600"
              minW={"80px"}
            >
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
              {rank}
            </Flex>
              <Flex justify={"flex-start"} direction={"column"} w={"full"} color="gray.500">
                <Text fontSize={{ base: "2xs", md: "xs" }}>"{question}"</Text>
              </Flex>

              <Flex
                px={2.5}
                py="5px"
                borderRadius="full"
                align="center"
                justify="center"
                fontSize={{ base: "sm", md: "md" }}
                lineHeight="1"
                fontWeight="800"
                // bg="primary.100"
                color="primary.900"
                textTransform="none"
                whiteSpace="nowrap"
                gap={1.5}
              >
                <Flex align="center" gap={3} justify="flex-start" >

                  <Text
                    minW="40px"
                    textAlign="right"
                    fontSize={{ base: "2xs", md: "xs" }}
                    fontWeight="700"
                    color="gray.500"
                    whiteSpace="nowrap"
                  >
                    {count}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
