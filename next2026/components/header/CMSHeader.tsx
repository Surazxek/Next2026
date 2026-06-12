"use client";
import { useAuth } from "@/lib/hook/useAuth";
import Link from "next/link";

export const CMSHeader = () => {
  const { loggedInUser } = useAuth();
  return (
    <>
      <header className="w-full p-5 flex bg-indigo-950 text-white  justify-between items-center">
        <div className="size-15 ">
          <Link href="/cms">
            <img
              src="../../public/logo.jpg"
              width={80}
              height={80}
              alt="logo"
              className="rounded-full"
            />
          </Link>
        </div>

        <nav>
          <ul>
            <li>{loggedInUser?.name}</li>
          </ul>
        </nav>
      </header>
    </>
  );
};
