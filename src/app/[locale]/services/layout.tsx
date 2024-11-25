import type { ReactNode } from "react";

export default function ServicesLayout({ children }: { children: ReactNode }) {

  return (
    <div>
      <div>
        {children}
      </div>
    </div>
  );
}