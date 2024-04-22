import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import "dotenv/config";

import "./globals.css";
import SideBar from "./components/sidePanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cardaty",
  description: "Manage your Cards with Ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={inter.className}>
        <ChakraProvider
          toastOptions={{ defaultOptions: { position: "bottom" } }}
        >
          <SideBar>{children}</SideBar>
        </ChakraProvider>
      </body>
    </html>
  );
}
