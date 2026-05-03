import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/public/components/Home/Navbar/ResponsiveNav";
import ParticlesHero from "@/public/components/Home/Hero/Background";

const font = Outfit({
  weight:["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ama Dombawela Portfolio | Next.js 15",
  description: "Portfolio website built with Next.js 15, showcasing projects and skills of Ama Dombawela.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#051208]`}>
          <ParticlesHero/>
          <ResponsiveNav/>
          <div className="relative z-10">
            {children}
          </div>
      </body>
    </html>
  );
}
