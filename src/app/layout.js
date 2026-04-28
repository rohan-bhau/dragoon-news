import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";


const poppins = Poppins({
  variable:"--font-poppins",
  subsets: ["latin"],
weight:["400", "500", "600", "700", "900"]
})

export const metadata = {
  title: "Dragon News",
  description: "Best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className={`${poppins.variable} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
