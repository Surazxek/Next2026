'use client'
import { AppConfig } from "@/lib/config/AppConfig";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ICategoryMenuItem {
  name: string;
  slug: string;
  url: string;
}

export default function HomeCategoryGrid() {
  const [data, setData] = useState<Array<ICategoryMenuItem>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAllCategories = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${AppConfig.baseUrl}products/categories`);
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      const sliced8 = data.toSorted(() => Math.random() - 0.5).slice(0, 8);
      setData(sliced8);
    } catch (exception: any) {
      setError(exception.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <section className="mt-6 px-4 md:px-8" aria-labelledby="category-heading">
      <div className="max-w-7xl mx-auto">
        <h2
          id="category-heading"
          className="text-2xl font-bold text-slate-900 mb-8"
        >
          Top Categories
        </h2>

        {loading && (
          <p className="text-center text-gray-500">Loading categories...</p>
        )}

        {error && (
          <p className="text-center text-red-600">{error}</p>
        )}

        {!loading && !error && (
          <ul className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 sm:gap-6 gap-4">
            {data.map((row: ICategoryMenuItem) => (
              <li key={row.slug}>
                <Link
                  href={`/category/${row.slug}`}
                  className="block bg-gray-100 p-3 rounded-lg cursor-pointer group overflow-hidden relative z-50 hover:before:bg-black focus-visible:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <div className="w-full aspect-[4/5] overflow-hidden mx-auto">
                    {/* <img
                      src={row.image}
                      alt={row.name}
                      className="h-full w-full object-contain"
                    /> */}
                  </div>

                  <p className="text-center font-semibold text-lg mt-2">
                    {row.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
