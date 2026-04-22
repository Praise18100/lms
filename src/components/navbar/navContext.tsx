"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { sections } from "./studentNavbarBody";

type NavbarContextValue = {
  activeItem: string;
  setActiveItem: (value: string) => void;
};

const NavbarContext = createContext<NavbarContextValue | undefined>(undefined);

function getInitialActiveItem() {
  for (const section of sections) {
    const activeItem = section.items.find((item) => item.active);

    if (activeItem) {
      return activeItem.label;
    }
  }

  return sections[0]?.items[0]?.label ?? "Dashboard";
}

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [activeItem, setActiveItem] = useState(getInitialActiveItem);

  const value = useMemo(
    () => ({ activeItem, setActiveItem }),
    [activeItem],
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
