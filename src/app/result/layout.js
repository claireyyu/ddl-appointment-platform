import ServiceBar from "@/components/ServiceBar/ServiceBar";
import Navbar from "@/components/Navbar/Navbar";

export default function ResultLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}