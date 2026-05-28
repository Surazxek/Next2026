'use client'
import { useAuth } from "@/lib/hook/useAuth"
import Link from "next/link"

export const Header= () => {
   const {loggedInUser} = useAuth()

    return(<>
    
    <header className="w-full bg-amber-900 p-5 shadow-lg">
        <section className="flex max-w-7xl mx-auto justify-between items-center">
          <Link href={"/"}>
            <img src="./logo.jpg" className="size-15 rounded-full" />
          </Link>

          <nav>
            <ul className="flex gap-10">
              <li>
                <Link
                  className="text-amber-50 text-xl font-semibold hover:underline hover:text-amber-300 shadow-lg "
                  href={"/"}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className="text-amber-50 text-xl font-semibold hover:underline hover:text-amber-300 shadow-lg "
                  href={"/about-us"}
                >
                  About Us
                </Link>
              </li>

           

              <li>
                <Link
                  className="text-amber-50 text-xl font-semibold hover:underline hover:text-amber-300 shadow-lg "
                  href={"/gallery"}
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  className="text-amber-50 text-xl font-semibold hover:underline hover:text-amber-300 shadow-lg "
                  href={"/blog"}
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  className="text-amber-50 text-xl font-semibold hover:underline hover:text-amber-300 shadow-lg "
                  href={"/contact-us"}
                >
                  Contact Us
                </Link>
              </li>
              {
                loggedInUser && loggedInUser.firstName ? <li>
                <Link
                  className="text-amber-50 text-xl font-semibold hover:underline hover:text-amber-300 shadow-lg bg-teal-700 px-10 text-center p-2 rounded-md "
                  href={"/cms"}
                >
                  {`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}
                </Link>
              </li> : <li>
                <Link
                  className="text-amber-50 text-xl font-semibold hover:underline hover:text-amber-300 shadow-lg bg-teal-700 px-10 text-center p-2 rounded-md "
                  href={"/login"}
                >
                  Login
                </Link>
              </li>
              }
                

            </ul>
          </nav>
        </section>
      </header>
    </>)
}