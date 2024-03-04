import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CarTableRowProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function CarTableRow({ children, ...rest }: CarTableRowProps) {
  return (
    <tr
      className={twMerge(
        "mb-1.5 pb-1 md:mb-0 md:p-4 border-b last:border-b-0 md:border md:last:border border-solid border-[#e5e7eb] relative flex flex-col md:table-row",
        rest.className
      )}
    >
      {children}
    </tr>
  );
}
