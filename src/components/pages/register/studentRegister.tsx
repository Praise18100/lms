"use client";
import { signup } from "@/app/actions/auth";
import { Field, Input, Box, Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react/flex";
import { Text } from "@chakra-ui/react/text";
import Link from "next/link";
import { useActionState } from "react";

export default function StudentRegister() {
  const [state, action, pending] = useActionState(signup, undefined);
  return (
    <form action={() => {
      const formData = new FormData(document.querySelector('form')!);
      formData.append("value", "student");
      return action(formData);
    }}>
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        gap={4}
        my={1}
      >
        <Field.Root pt={{ base: 4, md: 6 }}>
          <Field.Label fontSize={{ base: "xs", md: "sm" }} color={"gray.700"}>
            Full Name
          </Field.Label>
          <Input
            name="name"
            placeholder="Ada Okafor"
            p={4}
            borderRadius={"xl"}
            _placeholder={{ color: "gray.500" }}
            fontSize={"xs"}
          />
        </Field.Root>
        {state?.errors?.name && <p>{state.errors.name}</p>}

        <Field.Root>
          <Field.Label fontSize={{ base: "xs", md: "sm" }} color={"gray.700"}>
            Email address
          </Field.Label>
          <Input
            name="email"
            placeholder="ada@university.edu"
            p={4}
            borderRadius={"xl"}
            _placeholder={{ color: "gray.500" }}
            fontSize={"xs"}
          />
        </Field.Root>
        {state?.errors?.email && <p>{state.errors.email}</p>}

        <Input type="hidden" name="role" value="student" />
        <Field.Root>
          <Field.Label fontSize={{ base: "xs", md: "sm" }} color={"gray.700"}>
            Password
          </Field.Label>
          <Input
            name="password"
            placeholder="********"
            type="password"
            p={4}
            borderRadius={"xl"}
            _placeholder={{ color: "gray.500" }}
            fontSize={"xs"}
          />
        </Field.Root>
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map((error: string) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}

        <Button
          disabled={pending}
          type="submit"
          p={4}
          mt={4}
          w={"100%"}
          borderRadius={"xl"}
          colorScheme="brand"
          fontSize={{ base: "xs", md: "sm" }}
        >
          {pending ? "Creating..." : "Create Account"}
        </Button>

        <Text
          color={"gray.400"}
          fontSize={{ base: "xs", md: "sm" }}
          justifyContent={"center"}
        >
          Already have an account?{" "}
          <Link href="/login">
            {" "}
            <Text as="span" color="primary.600">
              Sign in
            </Text>
          </Link>
        </Text>
      </Flex>
    </form>
  );
}
