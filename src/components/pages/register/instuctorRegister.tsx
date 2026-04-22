"use client";
import { signup } from "@/app/actions/auth";
import { Field, Input, Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react/flex";
import { Text } from "@chakra-ui/react/text";
import Link from "next/link";
import { useActionState } from "react";

export default function InstructorRegister() {
  const [state, action, pending] = useActionState(signup, undefined);

  return (
    <form action={action}>
      {/* hidden role field — auth.ts reads formData.get("role") */}
      <input type="hidden" name="role" value="instructor" />

      <Flex direction="column" align="center" justify="center" gap={4} my={1}>
        <Field.Root pt={{ base: 4, md: 6 }}>
          <Field.Label fontSize={{ base: "xs", md: "sm" }} color="gray.700">
            Full Name
          </Field.Label>
          <Input
            name="fullname"
            placeholder="Dr. Mensah"
            p={4}
            borderRadius="xl"
            _placeholder={{ color: "gray.500" }}
            fontSize="xs"
          />
        </Field.Root>
        {state?.errors?.name && (
          <Text color="red.500" fontSize="xs">{state.errors.name}</Text>
        )}

        <Field.Root>
          <Field.Label fontSize={{ base: "xs", md: "sm" }} color="gray.700">
            Email address
          </Field.Label>
          <Input
            name="email"
            type="email"
            placeholder="dr.mensah@university.edu"
            p={4}
            borderRadius="xl"
            _placeholder={{ color: "gray.500" }}
            fontSize="xs"
          />
        </Field.Root>
        {state?.errors?.email && (
          <Text color="red.500" fontSize="xs">{state.errors.email}</Text>
        )}

        <Field.Root>
          <Field.Label fontSize={{ base: "xs", md: "sm" }} color="gray.700">
            Password
          </Field.Label>
          <Input
            name="password"
            type="password"
            placeholder="Min. 8 characters"
            p={4}
            borderRadius="xl"
            _placeholder={{ color: "gray.500" }}
            fontSize="xs"
          />
        </Field.Root>
        {state?.errors?.password && (
          <Flex direction="column" gap={1} w="full">
            <Text color="red.500" fontSize="xs">Password must:</Text>
            {state.errors.password.map((err: string) => (
              <Text key={err} color="red.500" fontSize="xs">— {err}</Text>
            ))}
          </Flex>
        )}

        <Field.Root>
          <Field.Label fontSize={{ base: "xs", md: "sm" }} color="gray.700">
            Instructor Invite Code
          </Field.Label>
          <Input
            name="inviteCode"
            placeholder="INV-XXXX-XXXX"
            p={4}
            borderRadius="xl"
            _placeholder={{ color: "gray.500" }}
            fontSize="xs"
          />
        </Field.Root>
        {state?.errors?.inviteCode && (
          <Text color="red.500" fontSize="xs">{state.errors.inviteCode}</Text>
        )}

        {state?.message && (
          <Text
            color={state.message === "Account created successfully" ? "green.500" : "red.500"}
            fontSize="xs"
          >
            {state.message}
          </Text>
        )}

        <Button
          type="submit"
          loading={pending}
          loadingText="Creating..."
          p={4}
          mt={4}
          w="100%"
          borderRadius="xl"
          colorScheme="brand"
          fontSize={{ base: "xs", md: "sm" }}
        >
          Create Account
        </Button>

        <Text color="gray.400" fontSize={{ base: "xs", md: "sm" }}>
          Already have an account?{" "}
          <Link href="/login">
            <Text as="span" color="primary.600">Sign in</Text>
          </Link>
        </Text>
      </Flex>
    </form>
  );
}