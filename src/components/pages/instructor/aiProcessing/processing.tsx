"use client";

import {
  Box,
  Text,
  VStack,
  HStack,
  Circle,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";

const steps = [
  "Document parsed and text extracted",
  "Key concepts identified and structured",
  "Generating comprehensive explanations...",
  "Creating examples and analogies",
  "Building vector index for student Q&A",
  "Auto-generating quiz questions",
];

export default function AIProcessing() {
  const [activeStep, setActiveStep] = useState(2); 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
   <Flex w="full" flex={1} direction={"column"} gap={6} >
     <Box
      p={6}
      rounded="xl"
      bg="primary.900"
      color="white"
      justifyContent={"flex-start"}
      w="full"
      boxShadow="lg"
    >
      <Text fontWeight="semibold" mb={4} fontSize="sm">
        Processing: "Week 3 – Binary search trees.pdf"
      </Text>

      <VStack align="stretch" gap={4}>
        {steps.map((step, index) => {
          const isCompleted = index < activeStep;
          const isActive = index === activeStep;

          return (
            <HStack key={index} gap={4}>
              <Circle
                size="22px"
                bg={
                  isCompleted
                    ? "green.300"
                    : isActive
                      ? "whiteAlpha.700"
                      : "whiteAlpha.400"
                }
              >
                {isCompleted ? (
                  <FaRegCircleCheck color="green.800" />
                ) : isActive ? (
                  <Spinner size="xs" />
                ) : null}
              </Circle>

              <Text fontSize="sm" opacity={isCompleted || isActive ? 1 : 0.5}>
                {step}
              </Text>
            </HStack>
          );
        })}
      </VStack>

      <Box
        mt={6}
        h="6px"
        bg="whiteAlpha.300"
        borderRadius="full"
        overflow="hidden"
      >
        <Box
          h="100%"
          w={`${((activeStep + 1) / steps.length) * 100}%`}
          bg="green.400"
          transition="width 0.4s ease"
        />
      </Box>
    </Box>
   </Flex>
  );
}
