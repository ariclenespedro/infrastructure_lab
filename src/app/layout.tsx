import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { StoreWrapper } from "../redux/StoreWrapper";
import Toastify from "@/app/components/Toast/Toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infrastructure Lab - Principal", 
  description: "Pagina principal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toastify/>
      <StoreWrapper> 
        {children}
        </StoreWrapper>
      </body>
    </html>
  );
}
