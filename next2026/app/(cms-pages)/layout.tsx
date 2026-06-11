import { ReactNode } from "react";
import "../globals.css";
import { Poppins, Ubuntu_Mono } from "next/font/google";
import { Metadata } from "next";
import { CMSHeader } from "@/components/header/CMSHeader";
import { CMSSidebar } from "@/components/CMSSidebar/CMSSidebar";
import AuthProvider from "@/lib/provider/AuthProvider";
import { Toaster } from "sonner";



const PoppinsSans = Poppins({
  variable: "--font-custom-sans",
  weight: ["100","900","200","300","400","500","700","800"],
  subsets: ["latin"],
});

const UbuntuMono = Ubuntu_Mono({
  variable: "--font-custom-mono",
  weight: ["400","700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CMS Admin Page",
  description: "This is admin panel",
};

export default function CMSLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html className={`${PoppinsSans.variable} ${UbuntuMono.variable} h-full antialiased`}>
      <body>
        <AuthProvider>
        <section className="flex flex-col w-full h-screen">
          <CMSHeader></CMSHeader>
          <div className="w-full flex h-full">
            <CMSSidebar />
            <section className="w-4/5 bg-gray-200 p-5 rounded-lg m-5">
              {children}
              <Toaster richColors closeButton />
            </section>
          </div>
        </section>
        </AuthProvider>
      </body>
      
    </html>
  );
}


