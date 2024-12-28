import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/ResponsiveNav";
import Footer from './Components/Footer/page'

const Roboto_san = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400','500', '700']
});


export const metadata: Metadata = {
  title: "Divine_Learning_Hub",
  description: "We offer high in demand tech courses such as Fullstack Website Development course, Product Design (UI/UX), Data Science/Analysis, Cyber Security and Frontend Engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Roboto_san.className} antialiased overflow-x-hidden`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
