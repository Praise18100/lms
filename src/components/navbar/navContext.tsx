"use client";

import { createContext, ReactNode, useContext, useMemo } from "react";
import { usePathname } from "next/navigation";

type NavbarContextValue = {
  activeItem: string;
  activeId: string;
  setActiveItem: (value: string) => void;
};

const NavbarContext = createContext<NavbarContextValue | undefined>(undefined);

function formatTitleFromId(id: string) {
  return id
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/^./, (char) => char.toUpperCase());
}

export function NavbarProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const activeId = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length >= 2) {
      return segments[1];
    }

    return "dashboard";
  }, [pathname]);

  const activeItem = useMemo(() => formatTitleFromId(activeId), [activeId]);

  const setActiveItem = () => {
    // Keep API compatibility for existing consumers.
  };

  const value = useMemo(
    () => ({ activeItem, activeId, setActiveItem }),
    [activeItem, activeId],
  );

  return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>;
}

export function useNavbarState() {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("useNavbarState must be used within NavbarProvider");
  }

  return context;
}
