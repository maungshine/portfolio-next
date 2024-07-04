import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maung Shine - A React and Nextjs Developer",
  description:
    "I'm Maung Shine, a frontend and full-stack developer passionate about crafting immersive digital experiences. With expertise in React and Next.js, I bring creativity and precision to every project I touch",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={font.className}>
        <SessionProvider session={session}>
          <Providers>
            <div className="min-h-screen flex flex-col">
              {children}
              {/* <Footer /> */}
            </div>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
