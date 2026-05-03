import InstructorSectionHeader from "@/components/header/instructorSectionHeader";
import { Flex } from "@chakra-ui/react";
import Content from "@/components/pages/instructor/contentLibrary/content";
import RecentMaterial from "@/components/pages/instructor/contentLibrary/recentMaterial";
export default function ContentLibrary() {
  return (
      <Flex minH="100vh" align="center" direction={"column"} justify="center">
      <InstructorSectionHeader />
      <Content />
      <RecentMaterial />
    </Flex>
  );
}
