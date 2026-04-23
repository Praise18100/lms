import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavbarState } from "../navbar/navContext";
import Link from "next/link";

export default function CourseHeader() {
  const { activeItem } = useNavbarState();

  return (
    <Flex
      w="full"
      h="72px"
      align="center"
      justify={"space-between"}
      bg="primary.50"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <VStack align="flex-start" gap={1}>
        <Heading
          size={{ base: "md", lg: "lg" }}
          color="gray.900"
          textTransform="capitalize"
        >
          {activeItem}
        </Heading>

        <Text fontSize="sm" color="gray.500">
          3 enrolled . 2 in progress
        </Text>
      </VStack>

      <Button
      type="submit"
        p={4}
        mt={4}
        borderRadius={"xl"}
        colorScheme="brand"
        fontSize={{ base: "xs", md: "sm" }}
        alignSelf="flex-end"
      >
        <Link href="/courses">Browse Courses</Link>
      </Button>
    </Flex>
  );
}
