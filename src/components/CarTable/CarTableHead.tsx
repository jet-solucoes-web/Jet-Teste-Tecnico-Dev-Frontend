import { ReactNode } from "react";

interface CarTableHeadProps {
  children: ReactNode;
}

export function CarTableHead({ children }: CarTableHeadProps) {
  return <thead className="bg-gray-50">{children}</thead>;
}
