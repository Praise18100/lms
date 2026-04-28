import { IconType } from "react-icons/lib";
import { CiFileOn } from "react-icons/ci";
import { Flex, Icon, Text } from "@chakra-ui/react";

type RecentTopics = {
  icon: IconType;
  title: string;
  course: string;
  pageCount: string;
  button: string | number;
};

export const sections: RecentTopics[] = [
  {
    icon: CiFileOn,
    title: "Week 3: Binary Search Trees",
    course: "Data Structures",
    pageCount: "24 pages",
    button: "New",
  },
  {
    icon: CiFileOn,
    title: "Week 2 — Sorting algorithms",
    course: "Algorithms",
    pageCount: "18 pages",
    button: "Read",
  },
  {
    icon: CiFileOn,
    title: "Week 1 — Relational models",
    course: "Database Systems",
    pageCount: "31 pages",
    button: "Read",
  },
];

export default function RecentCourses() {
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
          {sections.map(({ title, course, pageCount, button, icon }, index) => (
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
                <Text fontSize={{ base: "2xs", md: "xs" }} >
                  {title}
                </Text>

                <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.500">
                  {course} · {pageCount}
                </Text>
              </Flex>

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
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
