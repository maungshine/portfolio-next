"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Switch,
  Modal,
  Button,
  Avatar,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalContent,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { logout, signInWithGoogle } from "@/actions/auth.actions";
import { useSession } from "next-auth/react";

function BlogNavbar() {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeInitialized, setIsThemeInitialized] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setTheme, theme } = useNextTheme();

  useEffect(() => {
    // Indicate that the theme is now fully initialized
    setIsThemeInitialized(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-[#f8f7ff] z-50 dark:bg-[#040309] flex flex-col items-center fixed w-full tpo-0 justify-center">
        <div className="container  p-4 flex items-center">
          <div className="flex items-center">
            <Link href="/">
              <span className="dark:text-white text-2xl uppercase font-bold">
                Maung Shine
              </span>
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/blog/about">
                <span className="dark:text-white">About</span>
              </Link>
              <Link href="/blog">
                <span className="dark:text-white">Blog</span>
              </Link>
              <Link href="/blog/contact">
                <span className="dark:text-white">Contact</span>
              </Link>
            </div>
            <div className="flex items-center ml-auto">
              <div className="flex items-center space-x-2">
                {isThemeInitialized && (
                  <Switch
                    isSelected={theme === "dark"}
                    onValueChange={toggleTheme}
                    size="lg"
                    color="secondary"
                    thumbIcon={({ isSelected, className }) =>
                      isSelected ? (
                        <SunIcon props={{ className: className }} />
                      ) : (
                        <MoonIcon props={{ className: className }} />
                      )
                    }
                  />
                )}
              </div>
              <Avatar
                alt="User"
                color="primary"
                onClick={onOpen}
                className="cursor-pointer"
              />
            </div>
            <div className="md:hidden">
              <button
                className="text-gray-800 dark:text-gray-200 focus:outline-none"
                onClick={() => handleMobileMenu()}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden absolute flex flex-col top-16 px-4 z-50 bg-white dark:bg-[#040309] left-0 right-0">
              <Link
                href="/blog/about"
                className="border-b-1 last:border-b-0 py-2 dark:border-neutral-600 w-full"
              >
                <span className="dark:text-white">About</span>
              </Link>
              <Link
                href="/blog"
                className="border-b-1 last:border-b-0 py-2 dark:border-neutral-600 w-full"
              >
                <span className="dark:text-white">Blog</span>
              </Link>
              <Link
                href="/blog/contact"
                className="border-b-1 last:border-b-0 py-2 dark:border-neutral-600 w-full"
              >
                <span className="dark:text-white">Contact</span>
              </Link>
            </div>
          )}
        </div>
      </nav>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent className="p-8">
          {(onClose) => (
            <>
              <ModalHeader>
                <h2
                  id="modal-title"
                  className="text-lg font-bold text-center w-full"
                >
                  {session ? "Logout" : "Login"}
                </h2>
              </ModalHeader>
              <ModalBody>
                {session ? (
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-gray-700">You are logged in.</p>
                    <Button
                      onClick={async () => {
                        await logout();
                      }}
                      className="w-full rounded-full bg-btnDarkBlue hover:bg-btnDarkBlue/80 text-white font-semibold text-center py-6"
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center space-y-4">
                    <Button
                      onClick={async () => {
                        await signInWithGoogle();
                      }}
                      className="w-full rounded-full bg-btnDarkBlue hover:bg-btnDarkBlue/80 text-white font-semibold text-center py-6"
                    >
                      Login with Google
                    </Button>
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default BlogNavbar;
