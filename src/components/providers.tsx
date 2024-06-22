"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme="dark" attribute="class">
        <ParallaxProvider>{children}</ParallaxProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;
