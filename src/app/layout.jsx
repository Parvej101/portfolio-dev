import { Inter } from 'next/font/google';
import { Providers } from './providers';
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-gray-900`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
