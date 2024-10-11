import NavigationWrapper from "../components/NavigationWrapper/NavigationWrapper";
import Footer from "../components/Footer/Footer";
import { Kanit } from "next/font/google";
import { AuthProvider } from "../contexts/AuthContext";
import { ChildrenProps } from "../types/ChildrenProps";
import "../app/globals.css";


const kanit = Kanit({
  subsets: ['latin'],
  variable: '--font-kanit',
  display: 'swap',
  weight: '400',
})

export const metadata = {
  title: "Lab8",
  description: "A Bazi Web App",
};

export default function RootLayout({ children }: ChildrenProps) {
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
