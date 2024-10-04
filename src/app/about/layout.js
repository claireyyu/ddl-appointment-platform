import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageBar from "@/components/PageBar/PageBar";

export default function AboutLayout({ children }) {
  return (
    <>
      <Navbar />
      <PageBar>
        <h1 className="text-2xl md:text-3xl font-bold">About Us</h1>
      </PageBar>
      <main>{children}</main>
    </>
  );
}