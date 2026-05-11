import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import State from "@/app/Context/State";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IPL Analysis",
  description: "A platform where you can get analysis of IPL from 2008-22",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <State>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </State>
    </html>
  );
}
