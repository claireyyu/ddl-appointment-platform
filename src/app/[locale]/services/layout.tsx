import type { ReactNode } from "react";

export default function ServicesLayout({ children }: { children: ReactNode }) {

  return (
    <div>
      <div className="mx-4 md:mx-8 lg:mx-24 my-8 lg:my-16">
        {children}
      </div>
    </div>
  );
}