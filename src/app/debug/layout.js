import Navbar from "@/components/Navbar/Navbar";

export default function DebugLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}