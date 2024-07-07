"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider defaultTheme="dark" attribute="class">
        <ParallaxProvider>
          <ProgressBar
            height="4px"
            color="#544FFF"
            options={{ showSpinner: true }}
            shallowRouting
          />
          {children}
        </ParallaxProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;
