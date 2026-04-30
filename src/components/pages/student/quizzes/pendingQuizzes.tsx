import { Box, Flex, HStack, Text, Button } from "@chakra-ui/react";

type PendingQuiz = {
  label: string;
  timeleft: string;
  course: string;
  topic: string;
  questions: string;
  duration: string;
};

export const sections: PendingQuiz[] = [
  {
    label: "Due soon",
    timeleft: "2 days left",
    course: "Data Structures — Quiz 3",
    topic: "Binary search trees",
    questions: "15 questions",
    duration: "30 mins",
  },
  {
    label: "Due soon",
    timeleft: "4 days left",
    course: "Algorithms — Quiz 2",
    topic: "Sorting algorithms",
    questions: "10 questions",
    duration: "~15 min",
  },
];

export default function PendingQuizzes() {
  return (
    <Flex>
      <Flex gap={10} direction={"row"} w={"full"} borderRadius={"18px"} pb={{ base: 8, md: 10 }}>
        {sections.map(
          ({ label, timeleft, course, topic, questions, duration }, index) => (
            <Flex key={index} direction={"column"} flex={1} gap={3} justify={"column"} borderColor={"primary.900"}>
              <Flex
                w={"full"}
                direction={"column"}
                gap={6}
                bg={"white"}
                border={"1px solid"}
                borderColor={"primary.600"}
                borderRadius={"18px"}

              >
                <Flex
                  justify={"space-between"}
                  borderTopRadius={"18px"}
                  p={4}
                  direction={"row"}
                  bg={"primary.200"}
                >
                  <Flex align="center" justify="flex-start">
                    <Text fontSize="xs" fontWeight="600">
                      {label}
                    </Text>
                  </Flex>
                  <Flex align="center" justify="flex-end">
                    <Text fontSize="xs" color={"primary.900"}>
                      {timeleft}
                    </Text>
                  </Flex>
                </Flex>
                <Flex px={4} pb={2} direction={"column"} w={"full"}>
                  <Text fontSize={{ base: "xs", md: "sm" }} fontWeight={600}>
                    {course}
                  </Text>

                  <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.500">
                    {topic} · {questions} · {duration}
                  </Text>
                </Flex>
                <Flex px={4} pb={4} justify={"space-between"}>
                  <Flex justify={"flex-start"} flex={2}>
                    <Button
                      px={4}
                      borderRadius="xl"
                      w={"full"}
                      colorPalette="primary"
                      fontSize={{ base: "xs", md: "sm" }}
                    >
                      Start quiz
                    </Button>
                  </Flex>
                  <Flex justify={"flex-end"} flex={1}>
                    <Button
                      px={4}
                      borderRadius="xl"
                      border={"1px solid"}
                      colorPalette="primary"
                      variant="outline"
                      fontSize={{ base: "xs", md: "sm" }}
                    >
                      Review notes
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          ),
        )}
      </Flex>
    </Flex>
  );
}
