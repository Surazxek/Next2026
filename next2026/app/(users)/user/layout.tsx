import { Footer } from "@/components/footer/footer";
import AuthProvider from "@/lib/provider/AuthProvider";
import { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { ReactNode } from "react";
import "../../globals.css"
import { CMSHeader } from "@/components/header/CMSHeader";
import { UserSidebar } from "@/components/UserSidebar/UserSidebar";

const RobotoSans = Roboto ({
  variable: "--font-custom-sans",
  subsets: ["latin"]
})

const RobotoMono = Roboto_Mono({
  variable: "--font-custom-mono",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "User Dashboard || Ecommerce-Product",
  description: "User dashboard page",
};

export default function UserLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className= {` h-full bg-amber-50 ${RobotoSans.variable} ${RobotoMono.variable} antialiased`}>
      <body>
        
     
    <AuthProvider>
      <section className="flex flex-col w-full h-screen">
         <CMSHeader />

        <div className="w-full flex h-full">
          <UserSidebar />

          <section className="w-4/5 bg-gray-100 p-5 rounded-lg m-5">
            {children}
          </section>
          
        </div>
      </section>


      <Footer />
    </AuthProvider>
     </body>
    </html>
  );
}