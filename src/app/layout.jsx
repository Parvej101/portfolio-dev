import "./globals.css";

export const metadata = {
  title: "MH Parvej",
  description: "Wellcome to my postfiolio",
  icons: {
    icon: "/images/logo.png",
  },
  keywords: [
    "MH Parvej",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "JavaScript Developer",
  ],
  authors: [{ name: "MH Parvej", url: "https://parvej.dev" }],
  creator: "MH Parvej",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
