import ServiceBar from "@/components/ServiceBar/ServiceBar";

export default function ServicesLayout({ children }) {
  return (
    <>
      <ServiceBar />
      <main>{children}</main>
    </>
  );
}