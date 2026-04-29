"use client";

import { Box, Flex, Switch, Text, VStack } from "@chakra-ui/react";

type ToggleRowProps = {
  label: string;
  description: string;
  defaultChecked?: boolean;
};

function ToggleRow({ label, description, defaultChecked = true }: ToggleRowProps) {
  return (
    <Flex align="center" justify="space-between" gap={4}>
      <Box>
        <Text fontSize="xs" fontWeight="600" color="gray.900">
          {label}
        </Text>
        <Text fontSize="xs" color="gray.400" mt={0.5}>
          {description}
        </Text>
      </Box>
      <Switch.Root defaultChecked={defaultChecked} colorPalette="primary" flexShrink={0}>
        <Switch.HiddenInput />
        <Switch.Control>
          <Switch.Thumb />
        </Switch.Control>
      </Switch.Root>
    </Flex>
  );
}

export default function Notification() {
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.200"
      p={6}
      w="full"
    >
      <Text fontWeight="700" fontSize="md" mb={5} color="gray.900">
        Notifications
      </Text>

      <VStack gap={5} align="stretch">
        <ToggleRow
          label="Quiz reminders"
          description="24h before a quiz is due"
        />
        <ToggleRow
          label="New content alerts"
          description="When instructor uploads new material"
        />
      </VStack>
    </Box>
  );
}
