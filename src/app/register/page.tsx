'use client'
import InstructorRegister from "@/components/pages/register/instuctorRegister";
import StudentRegister from "@/components/pages/register/studentRegister";
import { Box, Flex, Tabs, Text } from "@chakra-ui/react";
import { BiUserPlus } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { SlGraduation } from "react-icons/sl";


export default function Register() {
  return (
    
    <Box
      p={9}
      borderRadius={"2xl"}
      my={10}
      w={"100vw"}
      maxW={"400px"}
      mx={"auto"}
      borderWidth={"1px"}
      boxShadow={"2px 2px 10px rgba(0,0,0,0.1)"}
    >
      <Box>
        <Flex
          justify={"flex-start"}
          w={"10"}
          h={"10"}
          bg="primary.50"
          borderRadius={"lg"}
          px={"auto"}
          p={1}
          mb={5}
          align={"center"}
        >
          <BiUserPlus
            size={29}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "var(--chakra-colors-primary-950)",
            }}
          />
        </Flex>
        <Flex direction={"column"} align={"flex-start"} gap={2} mb={4}>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight={{ base: "bold", md: "bolder" }}
          >
            Create your account
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color={"gray.500"}>
            Choose your role to specialize your experience
          </Text>

          <Flex width="full" >
            <Tabs.Root defaultValue="student" variant={"subtle"} >
              <Tabs.List
                justifyContent={"space-evenly"}
                gap={4}
                alignItems={"center"}
                w={"full"}
                mt={6}
                display={"flex"}
                flexDirection={{ base: "column", md: "row" }}
              >
                <Tabs.Trigger
                  value="student"
                  justifyContent={"center"}
                  alignItems={"center"}
                  h={"fit"}
                  w={"fit-content"}
                  px={5}
                  py={1}
                  borderRadius={"xl"}
                  borderWidth={"2px"}
                  borderColor={"gray.200"}
                  display={"flex"}
                  flexDirection={"column"}
                  _hover={{ bg: "primary.50" }}
                  flex={1}
                >
                  <SlGraduation
                    size={29}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "var(--chakra-colors-primary-950)",
                    }}
                  />
                  <Text fontSize={{ base: "xs", md: "sm" }}>Students</Text>
                  <Text color={"gray.500"} fontSize={{ base: "2xs", md: "xs" }}>
                    Learn with AI assistant
                  </Text>
                </Tabs.Trigger>

                <Tabs.Trigger
                 value="instructors"
                  justifyContent={"center"}
                  alignItems={"center"}
                  h={"fit"}
                  w={"fit-content"}
                  px={5}
                  py={1}
                  borderRadius={"xl"}
                  borderWidth={"2px"}
                  borderColor={"gray.200"}
                  display={"flex"}
                  flexDirection={"column"}
                  _hover={{ bg: "primary.50" }}
                  flex={1}
                >
                  <FiMonitor
                    size={29}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "var(--chakra-colors-primary-950)",
                    }}
                  />
                  <Text fontSize={{ base: "xs", md: "sm" }}>Instructors</Text>
                  <Text color={"gray.500"} fontSize={{ base: "2xs", md: "xs" }}>
                    Manage courses and contents
                  </Text>
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="student">
                <StudentRegister />
              </Tabs.Content> 
              <Tabs.Content value="instructors">
                <InstructorRegister />
              </Tabs.Content>
            </Tabs.Root>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
