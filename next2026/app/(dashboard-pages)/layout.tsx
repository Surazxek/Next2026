import AuthProvider from "@/lib/provider/AuthProvider";
import { Children, ReactNode } from "react";

export default function DashboardLayout({children} : Readonly <{children: ReactNode}>) {
    return(<>
    <html>
        <body>
            <AuthProvider>
            {children}
            </AuthProvider>
        </body>
    </html>
    </>)
}