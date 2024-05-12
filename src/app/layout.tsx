import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";


const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maung Shine - A React and Nextjs Developer",
  description: "I'm Maung Shine, a frontend and full-stack developer passionate about crafting immersive digital experiences. With expertise in React and Next.js, I bring creativity and precision to every project I touch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <div className="min-h-screen flex flex-col bg-indigo-200 dark:bg-black">
            <NavBar />
            {children}
            <Footer />
          </div>

        </Providers>
      </body>
    </html>
  );
}
