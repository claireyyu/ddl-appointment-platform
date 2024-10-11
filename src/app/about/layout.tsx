import PageBar from "../../components/PageBar/PageBar";
import { type ReactNode } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageBar>
        <h1 className="text-2xl md:text-3xl font-bold">About Us</h1>
      </PageBar>
      <main>{children}</main>
    </>
  );
}