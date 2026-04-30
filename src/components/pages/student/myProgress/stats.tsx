import { Flex, Text } from "@chakra-ui/react";

type SectionItem = {
  count: number;
  total?: number;
  info: string;
};

export const sections: SectionItem[] = [
  {
    count: 3,
    total: 5,
    info: "Topics Read",
  },
   {
    count: 74,
    info: "Avg quiz score",
  },
  {
    count: 7,
    info: "Day streak",
  },
  {
    count: 1,
    info: "Week areas",
  },
];

export default function Stats() {
  return (
    <Flex align={"center"} w={"full"}pb={{ base: 8, md: 10 }} pt={{ base: 1, md: 2 }}>
         {sections.map(({ count, total, info }, index) => (
           <Flex
             key={index}
             direction={"column"}
             align={"center"}
             justify={"flex-end"}
            //  bg={"primary.200"}
            //  borderRadius={"18px"}
            //  border={"1px solid"}
            //  borderColor={"primary.900"}
            //  borderWidth={"1"}
             p={4}
             w={"full"}
             flex={1}
            //  transition="transform 0.2s ease, box-shadow 0.2s ease"
            //  _hover={{
            //    transform: "translateY(-2px)",
            //    boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
            //  }}
           >
             <Text
               fontSize={{ base: "md", md: "2xl" }}
               fontWeight="700"
               color="primary.900"
               textAlign={"center"}
             >
               {count}{total ? `/${total}` : ""}
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
  )
}
