import { RxLayers } from "react-icons/rx";
import {
  Field,
  Input,
  Button,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react/box";
import { Flex } from "@chakra-ui/react/flex";
import { Text } from "@chakra-ui/react/text";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Login() {
  return (
    <Box
      p={9}
      borderRadius={"2xl"}
      my={10}
      w={"100vw"}
      maxW={"400px"}
      mx={"auto"}
      bg="brand.solid"
      borderWidth={"1px"}
      boxShadow={"2px 2px 10px rgba(0,0,0,0.1)"}
    >
      <Box>
        <Flex
          justify={"flex-start"}
          w={"10"}
          h={"10"}
          bg="primary.100"
          borderRadius={"lg"}
          px={"auto"}
          p={1}
          mb={5}
          align={"center"}
        >
          <RxLayers
            size={29}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "var(--chakra-colors-primary-950)",
            }}
          />
        </Flex>
        <Flex direction={"column"} align={"flex-start"} gap={2} mb={4}>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight={{ base: "bold", md: "bolder" }}
          >
            Welcome Back
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }} color={"gray.500"}>
            Sign in to continue to GoldAI- your intelligent study companion
          </Text>

          <Field.Root pt={{ base: 4, md: 8 }}>
            <Field.Label fontSize={{ base: "xs", md: "sm" }} color={"gray.700"}>
              Email address
            </Field.Label>
            <Input
              placeholder="ada@university.edu"
              p={4}
              borderRadius={"xl"}
              _placeholder={{ color: "black" }}
              fontSize={"xs"}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label fontSize={{ base: "xs", md: "sm" }} color={"gray.700"}>
              Password
            </Field.Label>
            <Input
              placeholder="********"
              type="password"
              p={4}
              borderRadius={"xl"}
              _placeholder={{ color: "black" }}
              fontSize={"xs"}
            />
          </Field.Root>

          <Box
            w={"full"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Checkbox.Root mt="2" value="remember me" size={"xs"}>
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label color={"gray.400"}>Remember me</Checkbox.Label>
            </Checkbox.Root>

            <Text
              alignItems={"flex-end"}
              fontSize={{ base: "xs", md: "sm" }}
              color={"primary.700"}
            >
              <a href="/auth/forgot-password">Forgot password?</a>
            </Text>
          </Box>

          <VStack direction={"column"} gap={4} w={"full"} align={"center"}>
            <Button
              type="submit"
              p={4}
              mt={4}
              w={"100%"}
              borderRadius={"xl"}
              colorScheme="brand"
              fontSize={{ base: "xs", md: "sm" }}
            >
              <Link href="/dashboard">Sign In</Link>
            </Button>

            <Text color={"gray.400"} fontSize={{ base: "2xs", md: "xs" }}>
              or continue with
            </Text>

            <Button
              w={"full"}
              p={4}
              colorScheme="gray"
              variant="outline"
              fontSize={{ base: "xs", md: "sm" }}
              borderRadius={"xl"}
            >
              <Link href="/auth/register">
                <Flex align={"center"} gap={2}>
                  <FcGoogle /> Continue with Google
                </Flex>
              </Link>
            </Button>

            <Text
              color={"gray.400"}
              fontSize={{ base: "xs", md: "sm" }}
              justifyContent={"center"}
            >
              Don't have an account?{" "}
              <a href="/auth/register">
                <Text as="span" color="primary.600">
                  Sign up free
                </Text>
              </a>
            </Text>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
}
