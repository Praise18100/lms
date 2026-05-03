import { Flex } from "@chakra-ui/react";
import InstructorHeader from "@/components/header/instructorSectionHeader";
import Upload from "@/components/pages/instructor/uploadContent/upload";
import AiGenerationSettings from "@/components/pages/instructor/uploadContent/aiGenerationSettings";
import FileType from "@/components/pages/instructor/uploadContent/fileType";

export default function UploadContentPage() {
  return (
    <Flex direction={"column"} gap={6} w={"full"} p={6}>
      <InstructorHeader  />
       <Upload />
       <FileType />
      <AiGenerationSettings />
    </Flex>
  )
}
