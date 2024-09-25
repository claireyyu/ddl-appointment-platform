import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ['latin'],
  variable: '--font-kanit',
  display: 'swap',
  weight: '400',
})

export const metadata = {
  title: "Bazi",
  description: "A Bazi Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${kanit.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
