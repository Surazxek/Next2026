import Link from "next/link";
import { Icon } from "@iconify/react";

export const CMSSidebar = () => {
  return (
    <aside className="w-64 bg-slate-800 text-white h-screen">
      <div className="p-4">
        <ul className="space-y-2">
           <li>
            <Link
              href="/cms/categories"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Icon icon="fa:sitemap" className="w-5 h-5 text-white" />
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              href="/cms"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Icon icon="fa:home" className="w-5 h-5 text-white" />
              <span>Categories</span>
            </Link>
          </li>
         
        </ul>
      </div>
    </aside>
  );
};
