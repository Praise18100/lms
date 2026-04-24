import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import Logo from "../logo";


export default function NavbarHeading() {
  return (
    <Flex>
      <Box>
        <Flex
          py={4}
          align="center"
          justify="space-between"
         borderBottom="1px solid #e8ebf2"
          mb={4}
          gap="10px"
        >
          <HStack gap="10px" minW="0">
            <Flex
              w="32px"
              h="32px"
              borderRadius="full"
              bg="#dbe0f0"
              color="primary.900"
              fontWeight="700"
             fontSize={{ base: "xs", lg: "sm"}}
              align="center"
              justify="center"
              flexShrink={0}
            >
             <Avatar.Root variant={"subtle"}>
            <Avatar.Fallback name="Ada Okafor" />
          </Avatar.Root>
            </Flex>

            <Box minW="0">
              <Text
                fontSize={{ base: "2xs", lg: "xs"}}
                fontWeight="600"
                lineHeight="1.1"
                whiteSpace="nowrap"
              >
                Ada Okafor
              </Text>
              <Text fontSize={{ base: "2xs", lg: "xs"}} color="gray.500" lineHeight="1.2">
                Year 2 - CS
              </Text>
            </Box>
          </HStack>

          <Flex
            px="8px"
            h="20px"
            borderRadius="999px"
            align="center"
            justify="center"
            bg="green.100"
            color="green.600"
            fontWeight="700"
            fontSize="2xs"
            letterSpacing="0.06em"
            textTransform="uppercase"
            flexShrink={0}
          >
            Online
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
