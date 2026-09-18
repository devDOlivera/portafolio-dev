import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Diego Olivera | Desarrollador Full Stack",
  description: "Portafolio profesional de Diego Olivera, enfocado en desarrollo web y arquitectura de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#09090b] text-[#ededed] antialiased selection:bg-blue-600/30`}>
        <Background />
        {children}
      </body>
    </html>
  );
}
