import type { ReactNode } from "react";

export default function ServicesLayout({ children }: { children: ReactNode }) {

  return (
    <div>
      <div className="my-8 lg:my-16">
        {children}
      </div>
    </div>
  );
}