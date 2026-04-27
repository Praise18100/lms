import { Box, Flex, Text } from "@chakra-ui/react";
import { time } from "drizzle-orm/singlestore-core/columns/time";
import { count } from "drizzle-orm/sql/functions/aggregate";
import { FiMessageSquare } from "react-icons/fi";
import { GoBook } from "react-icons/go";

type RecentActivity = {
  info: string;
  time: string | number;
};
type UpcomingQuiz = {
  title: string;
  info: string;
  button: string | number;
};

export const recentActivities: RecentActivity[] = [
  {
    info: 'Asked AI:"How does BST search work?"',
    time: "20m",
  },
  {
    info: "Completed BST Quiz 1 — scored 74%",
    time: "2h",
  },
  {
    info: "Read: Linked lists — understanding pointers",
    time: "Yesterday",
  },
];

export const sections: UpcomingQuiz[] = [
  {
    title: "Quiz 2: Binary Search Trees",
    info: " Due Friday 10 Questions",
    button: "start",
  },
  {
    title: "Quiz 3: Linked Lists",
    info: " Due Next Week · 10 Questions",
    button: "upcoming",
  },
];

export default function Section2() {
  return (
    <Flex gap={5}>
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
              Recent Activity
            </Text>
          </Flex>
        </Flex>

        <Flex gap={4} direction={"column"} justify={"space-between"} py={3}>
          {recentActivities.map(({ info, time }, index) => (
            <Flex
              key={index}
              direction={"column"}
              borderRadius={"md"}
              //   borderBottom="1px solid"
              //   borderColor="gray.600"
              minW={"80px"}
            >
              <Flex justify={"flex-start"}>
                <Text
                  fontSize={{ base: "2xs", md: "xs" }}
                  color="gray.500"
                  textAlign={"center"}
                >
                  {info}
                </Text>
              </Flex>

              <Flex justify={"flex-end"} w="full">
                <Text
                  fontSize={{ base: "2xs", md: "xs" }}
                  fontWeight="700"
                  color="gray.400"
                  textAlign={"center"}
                >
                  {time}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
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
              Upcoming Quizzes
            </Text>
          </Flex>
        </Flex>

        <Flex gap={4} direction={"column"} justify={"space-between"} py={3}>
          {sections.map(({ title, info, button }, index) => (
            <Flex
              key={index}
              direction={"row"}
              borderRadius={"md"}
              //   borderBottom="1px solid"
              //   borderColor="gray.600"
              minW={"80px"}
            >
              <Flex justify={"flex-start"} direction={"column"} w={"full"}>
                <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.500">
                  {title}
                </Text>

                <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.500">
                  {info}
                </Text>
              </Flex>

              <Flex justify={"flex-end"} w="full">
                <Text
                  fontSize={{ base: "2xs", md: "xs" }}
                  fontWeight="700"
                  color="gray.400"
                  textAlign={"center"}
                >
                  {button}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
