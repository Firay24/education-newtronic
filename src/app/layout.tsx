import { createTheme, ThemeProvider } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { theme } from "./theme";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Education Newtronic",
  description: "Education application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
