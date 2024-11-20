import { type ReactNode } from "react";

export default function ResultLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="mx-4 md:mx-8 lg:mx-48 mt-4 2xl:mx-96">
        {children}
      </div>
    </div>
  );
}