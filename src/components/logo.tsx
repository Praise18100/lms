import { Flex, HStack, Text } from "@chakra-ui/react";
import { MdOutlineLayers } from "react-icons/md";

export default function logo() {
  return (
   <Flex>
     <HStack borderBottom="1px solid #e8ebf2" gap="10px" pb={3}>
              <Flex
                w="40px"
                h="40px"
                borderRadius="9px"
                bg="primary.900"
                color="white"
                align="center"
                justify="center"
                fontWeight="700"
                fontSize="18px"
                lineHeight="1"
                py={2}
              >
               <MdOutlineLayers size={25}/>
    
              </Flex>
              <Text
                fontWeight="700"
                fontSize={{ base: "md", md: "lg"}}
                letterSpacing="-0.02em"
                lineHeight="1"
              >
                Gold<Text as="span" color="primary.900">AI</Text>
              </Text>
            </HStack>
   </Flex>
  )
}
