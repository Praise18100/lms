import { Box, Flex, Text } from "@chakra-ui/react";
import { MdOutlineLayers } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { PiSquaresFourLight } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { LuClock4 } from "react-icons/lu";
import { PiWaveSawtooth } from "react-icons/pi";
import { IoReorderThreeOutline } from "react-icons/io5";
import { LiaUserSolid } from "react-icons/lia";

export default function Navbar() {
  return (
    <Flex justifyContent={"flex-start"} direction={"column"} alignItems={"flex-start"} >
      <Box p={4} display={"flex"} alignItems={"center"}  justifyContent={"center"} gap={1} direction={"column"}>
        <Flex
        justify={"flex-start"}
        w={"fit"}
        h={"fit"}
        bg="primary.900"
        borderRadius={"lg"}
        px={"auto"}
        p={1}
        mb={5}
        align={"center"}
      >
       <MdOutlineLayers
          size={29}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "var(--chakra-colors-primary-50)",
          }}
        />
       
      </Flex>
      <Text>LMS</Text>
      </Box>

      <Box></Box>

      <Box>
        <Text>Main</Text>
        <Flex>
          <PiSquaresFourLight />
          <Text>Dashboard</Text>
        </Flex>
        <Flex>
          <FiMessageSquare />
          <Text>AI Tutor</Text>
        </Flex>
      </Box>

      <Box>
        <Flex>
          <Text>Learning</Text>
        </Flex>
        <Flex>
          <GoBook />
          <Text>My Courses</Text>
        </Flex>
        <Flex>
          <LuClock4 />
          <Text>Quizzes</Text>
        </Flex>
        <Flex>
          <PiWaveSawtooth />
          <Text>Learning Path</Text>
        </Flex>
        <Flex>
          <IoReorderThreeOutline />
          <Text>Notes</Text>
        </Flex>
      </Box>

      <Box>
        <Text>Account</Text>
        <Flex>
          <LiaUserSolid />
          <Text>Profile</Text>
        </Flex>
        <Text>Settings</Text>
      </Box>
      <Box>
        <Text>Log Out</Text>
      </Box>
    </Flex>
  );
}
