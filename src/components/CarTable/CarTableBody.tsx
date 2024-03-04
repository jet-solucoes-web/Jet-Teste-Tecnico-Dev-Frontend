import { ReactNode } from "react";

interface CarTableBodyProps {
  children: ReactNode;
}

export function CarTableBody({ children }: CarTableBodyProps) {
  return <tbody>{children}</tbody>;
}
