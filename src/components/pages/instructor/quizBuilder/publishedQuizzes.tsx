"use client";
import { Button, Flex, Menu, Text } from "@chakra-ui/react";
import { useState } from "react";

type PublishedQuiz = {
  course: string;
  question: string;
  week: string;
  attempts: number;
  average: number;
};

type QuizStatus = "Live" | "Draft" | "Scheduled" | "Archived";

export const sections: PublishedQuiz[] = [
  {
    course: "BST — Quiz 1",
    question: "10 questions",
    week: "Week 3",
    attempts: 32,
    average: 74,
  },
  {
    course: "Linked lists — Quiz 1",
    question: "8 questions",
    week: "Week 2",
    attempts: 38,
    average: 81,
  },
  {
    course: "Arrays — Quiz 1",
    question: "6 questions",
    week: "Week 1",
    attempts: 38,
    average: 88,
  },
];

export default function PublishedQuizzes() {
  const [quizStatuses, setQuizStatuses] = useState<QuizStatus[]>(
    sections.map(() => "Live"),
  );

  const statusOptions: QuizStatus[] = ["Live", "Draft", "Scheduled"];

  const statusStyles: Record<QuizStatus, { bg: string; color: string }> = {
    Live: { bg: "green.100", color: "green.700" },
    Draft: { bg: "gray.100", color: "gray.700" },
    Scheduled: { bg: "blue.100", color: "blue.700" },
    Archived: { bg: "gray.200", color: "gray.800" }
  };

  const handleStatusChange = (index: number, status: QuizStatus) => {
    setQuizStatuses((prev) => {
      const next = [...prev];
      next[index] = status;
      return next;
    });
  };

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
        // transition="transform 0.2s ease, box-shadow 0.2s ease"
        // _hover={{
        //   transform: "translateY(-2px)",
        //   boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
        // }}
      >
        <Flex
          justify={"space-between"}
          borderBottom={"1px solid #E8EBF2"}
          pb={4}
        >
          <Flex align="center" justify="flex-start">
            <Text fontSize="xs" fontWeight="600">
              Published Quizzes
            </Text>
          </Flex>
        </Flex>

        <Flex gap={4} direction={"column"} justify={"space-between"} py={3}>
          {sections.map(
            ({ course, question, week, attempts, average }, index) => (
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
                {/** Use the selected menu value as the status badge text/style for this row. */}
                {(() => {
                  const selectedStatus = quizStatuses[index];
                  const selectedStyle = statusStyles[selectedStatus];

                  return (
                    <>
                <Flex justify={"flex-start"} direction={"column"} w={"full"}>
                  <Text fontSize={{ base: "2xs", md: "xs" }}>{course} ({question})</Text>

                  <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.500">
                    {week} · {attempts} attempts · avg. {average}%
                  </Text>
                </Flex>

               <Flex gap={3} align="center" justify="flex-end">
                 <Flex w="56px" flexShrink={0}>
                    <Menu.Root positioning={{ placement: "bottom-end" }} >
                  <Menu.Trigger asChild>
                    <Button
                      w="full"
                      borderRadius="xl"
                      fontSize={{ base: "4xs", md: "2xs" }}
                      variant="outline"
                      borderColor="gray.300"
                      bg="white"
                      _hover={{ bg: "gray.50" }}
                    >
                      Edit
                    </Button>
                  </Menu.Trigger>
                  <Menu.Positioner>
                    <Menu.Content
                      minW="180px"
                      p={1}
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="gray.200"
                      boxShadow="0 10px 30px rgba(15, 23, 42, 0.12)"
                    >
                      {statusOptions.map((status) => (
                        <Menu.Item
                          key={`${index}-${status}`}
                          value={`${status.toLowerCase()}-${index}`}
                          onClick={() => handleStatusChange(index, status)}
                          borderRadius="md"
                          px={3}
                          py={2}
                          fontSize="xs"
                          fontWeight="500"
                          _highlighted={{ bg: "gray.100" }}
                        >
                          {status}
                        </Menu.Item>
                      ))}
                    </Menu.Content>
                  </Menu.Positioner>
                </Menu.Root>
                 </Flex>
                <Flex
                  w="68px"
                  flexShrink={0}
                  py="5px"
                  borderRadius="full"
                  align="center"
                  justify="center"
                  fontSize={{ base: "4xs", md: "2xs" }}
                  lineHeight="1"
                  fontWeight="700"
                  bg={selectedStyle.bg}
                  color={selectedStyle.color}
                  textTransform="none"
                  whiteSpace="nowrap"
                >
                  <Text>{selectedStatus}</Text>
                </Flex>
               </Flex>
                    </>
                  );
                })()}
              </Flex>
            ),
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
