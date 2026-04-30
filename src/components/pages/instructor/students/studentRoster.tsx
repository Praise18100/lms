import { IconType } from "react-icons/lib";
import { Avatar, Box, Flex, Icon, Text } from "@chakra-ui/react";
import { IoCheckmarkOutline } from "react-icons/io5";

type StudentRoster = {
  name: string;
  lastActive: string;
  button: string;
  percentage: number;
};

export const sections: StudentRoster[] = [
  {
    name: "Ada Okafor",
    lastActive: "Last active 20 min ago",
    button: "active",
    percentage: 74,
  },
  {
    name: "Bola Kamara",
    lastActive: "Last active 2h ago",
    button: "active",
    percentage: 91,
  },
  {
    name: "Chidi Ike",
    lastActive: "Last active 3 days ago",
    button: "At risk",
    percentage: 41,
  },
  {
    name: "Fatima Nwosu",
    lastActive: "Last active 1 day ago",
    button: "review",
    percentage: 63,
  },
];

export default function StudentRoster() {
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
              Student Roster
            </Text>
          </Flex>
          <Flex
            align="center"
            justify="flex-end"
            textTransform="none"
            whiteSpace="nowrap"
            px={2.5}
            py="5px"
            bg="primary.100"
            // lineHeight="1"
            borderRadius="full"
          >
            <Text
              fontSize={{ base: "2xs", md: "xs" }}
              color={"primary.900"}
              fontWeight={"600"}
            >
              5 at risk
            </Text>
          </Flex>
        </Flex>

        <Flex gap={4} direction={"column"} justify={"space-between"} py={3}>
          {sections.map(({ name, lastActive, button, percentage }, index) => (
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
                bg="primary.50"
                color="primary.900"
                fontWeight="700"
                fontSize={{ base: "xs", lg: "sm" }}
                align="center"
                justify="center"
                flexShrink={0}
              >
                <Avatar.Root variant={"subtle"}>
                  <Avatar.Fallback name={name} />
                </Avatar.Root>
              </Flex>
              <Flex justify={"flex-start"} direction={"column"} w={"full"}>
                <Text fontSize={{ base: "2xs", md: "xs" }}>{name}</Text>

                <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.500">
                  {lastActive}
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
                <Flex
                  align="center"
                  justify="flex-end"
                  textTransform="none"
                  whiteSpace="nowrap"
                  px={2.5}
                  py="5px"
                  bg="primary.100"
                  // lineHeight="1"
                  borderRadius="full"
                >
                  <Text
                    fontSize={{ base: "2xs", md: "xs" }}
                    color={"primary.900"}
                    fontWeight={"600"}
                  >
                    {button}
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
