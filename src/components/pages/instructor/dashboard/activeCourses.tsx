import { IconType } from "react-icons/lib";
import { Avatar, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { GoBook } from "react-icons/go";
import { PiDatabase } from "react-icons/pi";

type StudentRoster = {
  icon: IconType;
  course: string;
  student: number;
  documents: number;
  percentage: number;
};

export const sections: StudentRoster[] = [
  {
    icon: GoBook,
    course: "Intro to Data Science",
    student: 38,
    documents: 5,
    percentage: 72,
  },
  {
    icon: PiDatabase,
    course: "Algorithms",
    student: 24,
    documents: 3,
    percentage: 55,
  },
  {
    icon: PiDatabase,
    course: "Database Systems",
    student: 19,
    documents: 2,
    percentage: 40,
  },
];

export default function ActiveCourses() {
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
              Active courses
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
              View students
            </Text>
          </Flex>
        </Flex>

        <Flex gap={4} direction={"column"} justify={"space-between"} py={3}>
          {sections.map(({ course, student, icon, documents, percentage }, index) => (
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
              <Icon as={icon} />
            </Flex>
              <Flex justify={"flex-start"} direction={"column"} w={"full"}>
                <Text fontSize={{ base: "2xs", md: "xs" }}>{course}</Text>

                <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.500">
                  {student} students · {documents} documents
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
                gap={1.5}
              >
                <Flex align="center" gap={3} justify="flex-start" >
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
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
