
import { Field, Input, Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react/box";
import { Flex } from "@chakra-ui/react/flex";
import { Text } from "@chakra-ui/react/text";

export default function Login() {
  return (
    <Box
      border={"1px solid black"}
      p={8}
      borderRadius={"md"}
      my={10}
      w={"100vw"}
      maxW={"400px"}
      mx={"auto"}
      bg="panel"
    >
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        gap={4}
        my={10}
      >
        <Text fontWeight={{base: "md", md: "lg"}}>Welcome Back</Text>
        <Text fontWeight={{base: "normal", md: "medium"}}>Sign in to your LMS assistant account</Text>

        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input placeholder="me@example.com" p={4} />
        </Field.Root>

        <Field.Root>
          <Field.Label>Password</Field.Label>
          <Input placeholder="********" type="password" p={4} />
        </Field.Root>

        <a href="/dashboard">
          <Button type="submit" p={4} mt={4} colorScheme="brand">
            Sign In
          </Button>
        </a>

        <Text>or</Text>

          <a href="/auth/register">
            <Button p={4} colorScheme="brand">
              Create an account
            </Button>
          </a>
          
          <Text>Forgot password? <a href="/auth/forgot-password">Reset it</a></Text>
        </Flex>
    </Box>
  );
}
