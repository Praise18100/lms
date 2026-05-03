import { Flex, Text } from "@chakra-ui/react";

type SectionItem = {
  type: string;
  info: string;
};

export const sections: SectionItem[] = [
  {
    type: "PDF / DOCX",
    info: "Lecture notes, textbooks, papers",
  },
  {
    type: " PPTX / Slides",
    info: "Presentation decks",
  },
  {
    type: "Plain text / URL",
    info: "Raw notes, transcripts, links",
  },
];

export default function FileType() {
  return (
    <Flex
      gap={8}
      align={"center"}
      w={"full"}
      pb={{ base: 8, md: 10 }}
      pt={{ base: 3, md: 5 }}
    >
      {sections.map(({ info, type }, index) => (
        <Flex
          key={index}
          direction={"column"}
          align={"center"}
          justify={"flex-end"}
          bg={"primary.800"}
          borderRadius={"25px"}
          border={"1px solid"}
          borderColor={"primary.900"}
          borderWidth={"9"}
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
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="700"
            color="primary.200"
            textAlign={"flex-start"}
            textTransform={"uppercase"}
          >
            {type}
          </Text>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            color="gray.900"
            textAlign={"flex-start"}
          >
            {info}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
