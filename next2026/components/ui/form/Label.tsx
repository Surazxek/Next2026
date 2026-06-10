import { type ReactNode } from "react";
interface IFormLabelProps {
  htmlFor?: string;
  className?: string;
  children: ReactNode;
}
export const FormLabel = ({
  htmlFor = "",
  className = "w-full",
  children,
}: Readonly<IFormLabelProps>) => {
  return (
    <label className={`text-lg font-semibold ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
