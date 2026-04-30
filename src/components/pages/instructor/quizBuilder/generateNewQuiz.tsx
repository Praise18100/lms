"use client";
import {
  Button,
  createListCollection,
  Flex,
  Select,
  Text,
} from "@chakra-ui/react";

const contentOptions = createListCollection({
  items: [
    { label: "Week 3 — Binary search trees", value: "week3-bst" },
    { label: "Week 2 — Linked lists", value: "week2-ll" },
    { label: "Week 1 — Arrays", value: "week1-arrays" },
  ],
});

const questionCountOptions = createListCollection({
  items: [
    { label: "5 questions", value: "5" },
    { label: "10 questions", value: "10" },
    { label: "15 questions", value: "15" },
    { label: "20 questions", value: "20" },
  ],
});

const questionTypeOptions = createListCollection({
  items: [
    { label: "Multiple choice only", value: "mcq" },
    { label: "True / False", value: "tf" },
    { label: "Short answer", value: "short" },
    { label: "Mixed", value: "mixed" },
  ],
});

const difficultyOptions = createListCollection({
  items: [
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
  ],
});

export default function GenerateNewQuiz() {
  return (
    <Flex gap={5}>
      <Flex
        w="full"
        h="full"
        borderRadius="18px"
        border="1px solid"
        borderColor="#D7DDE7"
        bg="white"
        p={4}
        direction="column"
        // transition="transform 0.2s ease, box-shadow 0.2s ease"
        // _hover={{
        //   transform: "translateY(-2px)",
        //   boxShadow: "0 10px 24px rgba(15, 23, 42, 0.06)",
        // }}
      >
        <Flex borderBottom="1px solid #E8EBF2" pb={4}>
          <Text fontSize="xs" fontWeight="600">
            Generate new quiz with AI
          </Text>
        </Flex>

        <Flex direction="column" gap={4} py={4}>
          <Flex gap={4}>
            <Flex direction="column" gap={1} flex={1}>
              <Text fontSize="xs" fontWeight="500">
                Select content
              </Text>
              <Select.Root collection={contentOptions} size="sm">
                <Select.Trigger
                  p={2}
                  borderRadius="md"
                  borderColor="gray.300"
                  bg="white"
                  _hover={{ borderColor: "primr.400" }}
                  _focus={{
                    borderColor: "primary.500",
                    boxShadow: "0 0 0 1px var(--chakra-colors-primary-500)",
                  }}
                >
                  <Select.ValueText
                    fontSize="xs"
                    color="gray.400"
                    placeholder="Select content"
                  />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Positioner>
                  <Select.Content
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="gray.200"
                    boxShadow="0 10px 30px rgba(15, 23, 42, 0.10)"
                    p={1}
                  >
                    {contentOptions.items.map((item) => (
                      <Select.Item
                        key={item.value}
                        item={item}
                        fontSize="xs"
                        borderRadius="md"
                        px={3}
                        py={2}
                        color="gray.700"
                        _highlighted={{
                          bg: "primary.50",
                          color: "primary.700",
                        }}
                      >
                        {item.label}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Select.Root>
            </Flex>

            <Flex direction="column" gap={1} flex={1}>
              <Text fontSize="xs" fontWeight="500">
                Number of questions
              </Text>
              <Select.Root collection={questionCountOptions} size="sm">
                <Select.Trigger
                  p={2}
                  borderRadius="md"
                  borderColor="gray.300"
                  bg="white"
                  _hover={{ borderColor: "gray.400" }}
                  _focus={{
                    borderColor: "primary.500",
                    boxShadow: "0 0 0 1px var(--chakra-colors-primary-500)",
                  }}
                >
                  <Select.ValueText
                    fontSize="xs"
                    color="gray.400"
                    placeholder="Select count"
                  />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Positioner>
                  <Select.Content
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="gray.200"
                    boxShadow="0 10px 30px rgba(15, 23, 42, 0.10)"
                    p={1}
                  >
                    {questionCountOptions.items.map((item) => (
                      <Select.Item
                        key={item.value}
                        item={item}
                        fontSize="xs"
                        borderRadius="md"
                        px={3}
                        py={2}
                        color="gray.700"
                        _highlighted={{
                          bg: "primary.50",
                          color: "primary.700",
                        }}
                      >
                        {item.label}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Select.Root>
            </Flex>
          </Flex>

          <Flex gap={4}>
            <Flex direction="column" gap={1} flex={1}>
              <Text fontSize="xs" fontWeight="500">
                Question types
              </Text>
              <Select.Root collection={questionTypeOptions} size="sm">
                <Select.Trigger
                  p={2}
                  borderRadius="md"
                  borderColor="gray.300"
                  bg="white"
                  _hover={{ borderColor: "gray.400" }}
                  _focus={{
                    borderColor: "primary.500",
                    boxShadow: "0 0 0 1px var(--chakra-colors-primary-500)",
                  }}
                >
                  <Select.ValueText
                    fontSize="xs"
                    color="gray.400"
                    placeholder="Select type"
                  />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Positioner>
                  <Select.Content
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="gray.200"
                    boxShadow="0 10px 30px rgba(15, 23, 42, 0.10)"
                    p={1}
                  >
                    {questionTypeOptions.items.map((item) => (
                      <Select.Item
                        key={item.value}
                        item={item}
                        fontSize="xs"
                        borderRadius="md"
                        px={3}
                        py={2}
                        color="gray.700"
                        _highlighted={{
                          bg: "primary.50",
                          color: "primary.700",
                        }}
                      >
                        {item.label}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Select.Root>
            </Flex>

            <Flex direction="column" gap={1} flex={1}>
              <Text fontSize="xs" fontWeight="500">
                Difficulty
              </Text>
              <Select.Root collection={difficultyOptions} size="sm">
                <Select.Trigger
                  p={2}
                  borderRadius="md"
                  borderColor="gray.300"
                  bg="white"
                  _hover={{ borderColor: "gray.400" }}
                  _focus={{
                    borderColor: "primary.500",
                    boxShadow: "0 0 0 1px var(--chakra-colors-primary-500)",
                  }}
                >
                  <Select.ValueText
                    fontSize="xs"
                    color="gray.400"
                    placeholder="Select difficulty"
                  />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Positioner>
                  <Select.Content
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="gray.200"
                    boxShadow="0 10px 30px rgba(15, 23, 42, 0.10)"
                    p={1}
                  >
                    {difficultyOptions.items.map((item) => (
                      <Select.Item
                        key={item.value}
                        item={item}
                        fontSize="xs"
                        borderRadius="md"
                        px={3}
                        py={2}
                        color="gray.700"
                        _highlighted={{
                          bg: "primary.50",
                          color: "primary.700",
                        }}
                      >
                        {item.label}
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select.Positioner>
              </Select.Root>
            </Flex>
          </Flex>

          <Flex>
            <Button
              bg="primary.900"
              color="white"
              borderRadius="lg"
              fontSize="sm"
              px={5}
              // _hover={{ bg: "primary.900" }}
            >
              Generate with AI
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
