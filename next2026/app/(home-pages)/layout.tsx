import { Metadata } from "next";
import { ReactNode } from "react";
import "../globals.css"
import {Roboto, Roboto_Mono} from "next/font/google"
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import AuthProvider from "@/lib/provider/AuthProvider";



const RobotoSans = Roboto ({
  variable: "--font-custom-sans",
  subsets: ["latin"]
})

const RobotoMono = Roboto_Mono({
  variable: "--font-custom-mono",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Home Page || Ecommerce-Product",
  description: " This is a home page for an ecommerce with website selling all types of products"
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className= {` h-full bg-amber-50 ${RobotoSans.variable} ${RobotoMono.variable} antialiased`}>
      <body>
        <AuthProvider>
        <Header />
        {children}
        
        <Footer />

        </AuthProvider>
       
      </body>
    </html>
  );
}