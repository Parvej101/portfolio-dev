// src/app/layout.jsx  <-- এটি আপনার একমাত্র লেআউট ফাইল হবে

import { Inter } from 'next/font/google';
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MH Parvej | Frontend Developer",
  description: "Welcome to my portfolio. Explore my projects and skills.",
  icons: {
    icon: "/images/logo.png",
  },
  keywords: [
    "MH Parvej", "Portfolio", "Web Developer", "Frontend Developer",
    "React Developer", "Next.js Developer", "JavaScript Developer",
  ],
  authors: [{ name: "MH Parvej", url: "https://parvej101.vercel.app" }],
  creator: "MH Parvej",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning এখানে যোগ করা হয়েছে
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
           
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}