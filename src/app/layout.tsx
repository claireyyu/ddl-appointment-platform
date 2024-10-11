import NavigationWrapper from "../components/NavigationWrapper/NavigationWrapper";
import Footer from "../components/Footer/Footer";
import { Kanit } from "next/font/google";
import { AuthProvider } from "../contexts/AuthContext";
import "../app/globals.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";

const kanit = Kanit({
  subsets: ['latin'],
  variable: '--font-kanit',
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  title: "Lab8",
  description: "A Bazi Web App",
};

export default function RootLayout({children}: {children: ReactNode}) {  
  return (
    <html lang="en" className={`${kanit.variable}`}>
      <body>
        <AuthProvider>
          <NavigationWrapper />
          {children}
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
