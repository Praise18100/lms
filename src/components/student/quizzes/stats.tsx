import { Flex, Text } from "@chakra-ui/react";

type SectionItem = {
  count: number;
  info: string;
};

export const sections: SectionItem[] = [
  {
    count: 34,
    info: "Completed",
  },
  {
    count: 2,
    info: "Due this week",
  },
  {
    count: 74,
    info: "Avg score",
  },
  {
    count: 7,
    info: "Best streak",
  },
];

export default function Stats() {
  return (
    <Flex gap={4} align={"center"} w={"full"}>
      {sections.map(({ count, info }, index) => (
        <Flex
          key={index}
          direction={"column"}
          align={"center"}
          justify={"flex-end"}
          bg={"primary.200"}
          borderRadius={"10px"}
          border={"1px solid"}
          borderColor={"primary.400"}
          p={4}
          w={"full"}
          flex={1}
          transition="transform 0.2s ease, box-shadow 0.2s ease"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
          }}
        >
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="700"
            color="primary.900"
            textAlign={"center"}
          >
            {count}
          </Text>
          <Text
            fontSize={{ base: "2xs", md: "xs" }}
            color="gray.600"
            textAlign={"center"}
          >
            {info}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
