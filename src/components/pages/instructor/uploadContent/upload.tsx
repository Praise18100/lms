import { Box, Flex, FileUpload, Icon, Button } from "@chakra-ui/react";
import { LuUpload } from "react-icons/lu";

export default function upload() {
  return (
    <Flex w="full">
      <FileUpload.Root maxW="xl" alignItems="stretch" maxFiles={10}>
        <FileUpload.HiddenInput />
        <FileUpload.Dropzone>
          <Icon size="md" color="fg.muted">
            <LuUpload />
          </Icon>
          <FileUpload.DropzoneContent>
            <Box>Drop files here or click to browse</Box>
            <Box color="fg.muted">
              PDF, DOCX, TXT, PPTX up to 100MB per file
            </Box>
            <Button
              bg="primary.900"
              color="white"
              _hover={{ bg: "primary.800" }}
            >
              Choose files
            </Button>
          </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>
        <FileUpload.List />
      </FileUpload.Root>
    </Flex>
  );
}
