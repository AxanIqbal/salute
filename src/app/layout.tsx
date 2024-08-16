import type { Metadata } from "next";
import "./globals.css";
import { dm_sans, inter } from "@/utils/fonts";
import Bg from "@/assets/bg.png";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Salute",
  description: "Auto Mechanic Workshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("", dm_sans.variable, inter.variable)}
        style={{
          background: `linear-gradient(0deg, rgba(62,66,60,0.9), rgba(62,66,60,0.9)), url("${Bg.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {children}
      </body>
    </html>
  );
}
