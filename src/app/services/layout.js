import PageBar from "@/components/PageBar/PageBar";
import Navbar from "@/components/Navbar/Navbar";

export default function ServicesLayout({ children }) {
  return (
    <div>
      <Navbar />
      <PageBar>
        <h1 className="text-2xl md:text-3xl font-bold">Services</h1>
      </PageBar>
      <main>{children}</main>
    </div>
  );
}