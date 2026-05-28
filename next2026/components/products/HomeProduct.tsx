import { AppConfig } from "@/lib/config/AppConfig";
import Link from "next/link";

export default async function HomeProductGrid() {
  const response = await fetch(
    `${AppConfig.baseUrl}products`
  );

  const data = await response.json();

  return (
    <section
      className="mt-6 px-4 md:px-8"
      aria-labelledby="product-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="product-heading"
          className="text-2xl font-bold text-slate-900 mb-8"
        >
          Products for you!!!!
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4">
          {data.products.map((row: any) => (
            <li key={row.id}>
              <Link
                href={`/product/${row.id}`}
                className="block bg-gray-100 p-3 rounded-lg cursor-pointer group overflow-hidden relative z-50 hover:before:bg-black focus-visible:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="w-full aspect-[4/5] overflow-hidden mx-auto">
                  <img
                    src={row.thumbnail}
                    alt={row.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="text-center font-semibold text-lg mt-2">
                  {row.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}