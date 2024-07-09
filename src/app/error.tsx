"use client"; // Error components must be Client Components

import NavBar from "@/components/NavBar";
import { ScrollProvider } from "@/components/providers/ScrollContextProvider";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { FaExclamation, FaExclamationTriangle } from "react-icons/fa";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col flex-1">
      <ScrollProvider>
        <NavBar />
      </ScrollProvider>
      {/* Centered content */}
      <div className="flex-1 flex flex-col gap-2 items-center justify-center dark:bg-[#040309] bg-white">
        <FaExclamationTriangle className="text-9xl text-red-500" />
        <h2>Something went wrong!</h2>
        <Button
          className="bg-btnDarkBlue text-white dark:bg-btnDarkBlue dark:text-white"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => window.location.reload()
          }
        >
          Try again
        </Button>
      </div>
    </main>
  );
}
