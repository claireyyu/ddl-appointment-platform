import PageBar from "../../components/PageBar/PageBar";
import type { ReactNode } from "react";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <PageBar>
        <h1 className="text-2xl md:text-3xl font-bold">Services</h1>
      </PageBar>
      <div className="mx-4 md:mx-8 lg:mx-24 my-16">
        {children}
      </div>
    </div>
  );
}