import { ReactNode } from "react";
import "./carTable.css";

interface CarTableRootProps {
  children: ReactNode;
}

export function CarTableRoot({ children }: CarTableRootProps) {
  return <table className="border-collapse w-full">{children}</table>;
}
