import PageBar from "../../components/PageBar/PageBar";

export default function AboutLayout({ children }) {
  return (
    <>
      <PageBar>
        <h1 className="text-2xl md:text-3xl font-bold">About Us</h1>
      </PageBar>
      <main>{children}</main>
    </>
  );
}