import PageBar from "../../components/PageBar/PageBar";

export default function ServicesLayout({ children }) {
  return (
    <div>
      <PageBar>
        <h1 className="text-2xl md:text-3xl font-bold">Services</h1>
      </PageBar>
      <main>{children}</main>
    </div>
  );
}