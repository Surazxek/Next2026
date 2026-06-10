import type { ReactNode } from "react";

interface IButtonProps {
  className?: string, 
  children: ReactNode, 
  disabled?: boolean,
  type: "submit" | "reset" | "button"
}
export const FormActionButton = ({className='', children, disabled=false, type='submit'}: Readonly<IButtonProps>) => {
  // props change 
  return (
    <button
      disabled={disabled}
      className={`rounded-md cursor-pointer disabled:cursor-not-allowed transition hover:underline  w-full p-2 items-center justify-center text-white ${
        type === "reset"
          ? "hover:bg-red-950 bg-red-800 disabled:hover:bg-red-950/40 disabled:bg-red-800/60"
          : type === "submit"
            ? "hover:bg-green-950 bg-green-800 disabled:hover:bg-green-950/40 disabled:bg-green-800/60 "
            : "border border-gray-300 hover:bg-gray-200 text-gray-950!"
      } ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}
