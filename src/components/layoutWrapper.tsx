"use client";

import { usePathname } from "next/navigation";
import { Flex } from "@chakra-ui/react";

import { ReactNode, useEffect } from "react";
import Header from "./header/pageHeader";
import { NavbarProvider } from "./navbar/navContext";
import StudentNavbar from "./navbar/studentNavbar";
import InstructorNavbar from "./navbar/instructorNavbar";
import { useRouter } from "next/navigation";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Hide navbar on login and register pages
  const hideNavbar = pathname === "/login" || pathname === "/register" || pathname === "/";

  useEffect(() => {
    if (pathname === "/student") {
      router.push("/student/dashboard");
    }
  }, [pathname, router]);
  useEffect(() => {
    if (pathname === "/instructor") {
      router.push("/instructor/dashboard");
    } 
  }, [pathname, router]);

  if (hideNavbar) {
    return <>{children}</>;
  }

  
  return (
    <NavbarProvider>
      <Flex direction="row" align="stretch" minH="100vh" >
      {pathname.startsWith("/instructor") ? (
            <InstructorNavbar />
          ) : (
            <StudentNavbar />
          )}
        <Flex flex={1} direction="column" minW={0}>
          <Header />
          <Flex flex={1} py={{ base: 4, md: 6 }} bg="primary.50" >
            {children}
          </Flex>
        </Flex>
      </Flex>
    </NavbarProvider>
  );
}
