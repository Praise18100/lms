"use client";

import {
  Box,
  Button,
  Input,
  Select,
  Textarea,
  VStack,
  HStack,
  NativeSelect,
} from "@chakra-ui/react";
import { Field } from "@chakra-ui/react";

export default function AiGenerationSettings() {
  return (
    <Box
      bg="white"
      p={6}
      w="full"
      rounded="xl"
      shadow="sm"
      border="1px solid"
      borderColor="gray.200"
    >
      <VStack gap={6} align="stretch">
        <HStack justify="space-between">
          <Box fontWeight="semibold">AI generation settings</Box>
          <Box
            fontSize="sm"
            px={2}
            py={1}
            bg="primary.600"
            color="white"
            rounded="md"
          >
            Optional
          </Box>
        </HStack>

        <Field.Root>
          <Field.Label>Module / week title</Field.Label>
          <Input
            placeholder="e.g. Week 3 – Binary search trees"
            borderColor="primary.900"
          />
        </Field.Root>

        <HStack gap={4} align="start">
          <Field.Root flex={1}>
          <Field.Label>Target audience</Field.Label>
          <NativeSelect.Root>
            {/*  focusBorderColor="primary.900" */}
            <NativeSelect.Field >
              <option value="">Select audience</option>
              <option value="undergrad">University undergraduates</option>
              <option value="highschool">High school students</option>
              <option value="beginner">Beginners</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>

          <Field.Root flex={1}>
          <Field.Label>Tone</Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field>
              <option value="">Select tone</option>
              <option value="clear">Clear and approachable</option>
              <option value="professional">Professional</option>
              <option value="technical">Technical</option>
            </NativeSelect.Field>
          </NativeSelect.Root>
        </Field.Root>
        </HStack>

        <Field.Root>
          <Field.Label>Special instructions for AI (optional)</Field.Label>
          <Textarea
            placeholder="e.g. Focus on practical examples, include real-world analogies, avoid heavy jargon"
            rows={4}
            borderColor="primary.900"
          />
        </Field.Root>

        {/* Buttons */}
        <HStack gap={3}>
          <Button
            bg="primary.900"
            color="white"
            _hover={{ bg: "primary.800" }}
          >
            Upload and process with AI
          </Button>

          <Button variant="outline" borderColor="gray.300">
            Save draft
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}