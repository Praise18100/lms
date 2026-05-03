import { getSessionUser } from "@/app/actions/login";
import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type SectionItem = {
  count: number;
  info: string;
};

export const sections: SectionItem[] = [
  {
    count: 38,
    info: "Students",
  },
  {
    count: 74,
    info: "Avg score",
  },
  {
    count: 1248,
    info: "AI Queries",
  },
];

export default function DashboardHeader() {
  const [fullname, setFullname] = useState("User");

  useEffect(() => {
    getSessionUser().then((user) => {
      if (user) {
        setFullname(user.name);
      }
    });
  }, []);

  return (
    <Flex
      justify={"space-between"}
      bg={"primary.900"}
      borderRadius={"lg"}
      p={6}
      mb={8}
      align={"center"}
      gap={4}
    >
      <Flex direction={"column"} justify={"flex-start"} >
        <Text
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="700"
          color="white"
        >
          Good morning, {fullname}! 👋
        </Text>
        <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.400" lineHeight={1.4}>
        Hear's what's happening around your course today
        </Text>
      </Flex>

      <Flex gap={4} align={"center"}>
        {sections.map(({ count, info }, index) => (
          <Flex
            key={index} 
            direction={"column"}
            align={"center"}
            justify={"flex-end"}
            bg={"primary.100"}
            borderRadius={"md"}
            borderRight="1px solid"
            borderRightColor="gray.600"
            p={4}
            minW={"80px"}
          >
            <Text fontSize={{ base: "md", md: "lg" }} fontWeight="700" color="primary.900" textAlign={"center"}>
              {count}
            </Text>
            <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.500" textAlign={"center"}>
              {info}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
