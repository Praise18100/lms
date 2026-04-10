import { Box } from "@chakra-ui/react";
import RegisterHeading from "./registerHeading";
import StudentRegister from "./studentRegister";

export default function Home() {
  return (
    <>
  <Box
        border={"1px solid black"}
        p={4}
        borderRadius={"md"}
        my={10}
        w={"100vw"}
        maxW={"400px"}
        mx={"auto"}
      >
      <RegisterHeading />
      <StudentRegister />
    </Box>
    </>
  );
}
