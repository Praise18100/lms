import { IconType } from "react-icons/lib";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { IoCheckmarkOutline } from "react-icons/io5";

type CompletedQuiz = {
  icon: IconType;
  title: string;
  course: string;
  time: string;
  score: number;
};

export const sections: CompletedQuiz[] = [
  {
    icon: IoCheckmarkOutline,
    title: "BST — Quiz 2",
    course: "Data Structures",
    time: "3 days ago",
    score: 90,
  },
  {
    icon: IoCheckmarkOutline,
    title: "Big O Notation — Quiz 1",
    course: "Algorithms",
    time: "5 days ago",
    score: 68,
  },
  {
    icon: IoCheckmarkOutline,
    title: "Arrays & Linked Lists — Quiz 1",
    course: "Data Structures",
    time: "1 week ago",
    score: 85,
  },
  {
    icon: IoCheckmarkOutline,
    title: "Recursion fundamentals",
    course: "Algorithms",
    time: "1 week ago",
    score: 55,
  },
];

export default function CompletedQuizzes() {
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
        >
          <Flex align="center" justify="flex-start">
            <Text fontSize="xs" fontWeight="600">
              Recent Topics
            </Text>
          </Flex>
        </Flex>

        <Flex gap={4} direction={"column"} justify={"space-between"} py={3}>
          {sections.map(({ title, course, time, score, icon }, index) => (
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
                bg="primary.100"
                color="primary.900"
                fontWeight="700"
                fontSize={{ base: "s", md: "md" }}
                align="center"
                justify="center"
                flexShrink={0}
              >
                <Icon as={icon} />
              </Flex>
              <Flex justify={"flex-start"} direction={"column"} w={"full"}>
                <Text fontSize={{ base: "2xs", md: "xs" }}>{title}</Text>

                <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.500">
                  {course} · {time}
                </Text>
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
              >
                {score}%
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
