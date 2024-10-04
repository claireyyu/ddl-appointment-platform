import ServiceBar from "@/components/ServiceBar/ServiceBar";
import Navbar from "@/components/Navbar/Navbar";

export default function ServicesLayout({ children }) {
  return (
    <div>
      <Navbar />
      <ServiceBar />
      <main>{children}</main>
    </div>
  );
}