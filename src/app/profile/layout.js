import Navbar from "@/components/Navbar/Navbar";

export default function ProfileLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}