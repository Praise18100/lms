"use client";

import { usePathname } from "next/navigation";
import { Flex } from "@chakra-ui/react";
import Navbar from "./navbar/navbar";
import { ReactNode } from "react";
import Header from "./header/header";
import { NavbarProvider } from "./navbar/navContext";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Hide navbar on login and register pages
  const hideNavbar = pathname === "/login" || pathname === "/register" || pathname === "/";

  if (hideNavbar) {
    return <>{children}</>;
  }

  return (
    <NavbarProvider>
      <Flex direction="row" align="stretch" justify="flex-start" minH="100vh">
        <Navbar />
        <Flex flex={1} direction="column" minW={0}>
          <Header />
          <Flex flex={1} px={{ base: 4, md: 8 }} py={{ base: 4, md: 6 }}>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </NavbarProvider>
  );
}
