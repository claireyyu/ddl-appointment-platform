import ServiceBar from "@/components/ServiceBar/ServiceBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function ContactLayout({ children }) {
  return (
    <div>
      <Navbar />
      <ServiceBar />
      <main>{children}</main>
    </div>
  );
}