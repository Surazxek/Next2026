// server side component
// not allowed to use hook
import { AppConfig } from "@/lib/config/AppConfig";
import Link from "next/link";

export default async function HomeProductGrid() {
  let data;

  try {
    const response = await fetch(`${AppConfig.baseUrl}products`);
    data = await response.json();
  } catch (error) {
    console.log(error);
  }

  return (
    <section
      className="mt-6 px-4 md:px-8"
      aria-labelledby="products-heading"
    >
      <div className="mx-auto max-w-4xl lg:max-w-7xl">
        <h2
          id="products-heading"
          className="text-2xl font-bold text-slate-900 mb-8"
        >
          Products for you!!!
        </h2>

        <ul className="grid grid-cols-2 gap-4 md:gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {data &&
            data.products &&
            data.products.map(
              (
                row: { id: number; thumbnail: string; title: string; price: number },
                i: number
              ) => (
                <li
                  key={i}
                  className="bg-white flex flex-col rounded-md border border-slate-200 shadow-sm relative"
                >
                  <Link
                    href={`/product/${row.id}`}
                    className="rounded-md block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <img
                      src={row.thumbnail}
                      alt={row.title}
                      className="w-full object-cover object-top"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="text-sm md:text-base font-semibold text-slate-900 line-clamp-2">
                      {row.title}
                    </h3>
                  </div>
                </li>
              )
            )}
        </ul>
      </div>
    </section>
  );
}





































// import { AppConfig } from "@/lib/config/AppConfig";
// import Link from "next/link";

// export default async function HomeProductGrid() {
//   const baseUrl = AppConfig.baseUrl;
//   const productsUrl = baseUrl ? `${baseUrl}/products` : null;

//   if (!productsUrl) {
//     return (
//       <section className="mt-6 px-4 md:px-8" aria-labelledby="product-heading">
//         <div className="max-w-7xl mx-auto">
//           <h2
//             id="product-heading"
//             className="text-2xl font-bold text-slate-900 mb-8"
//           >
//             Products for you!!!!
//           </h2>
//           <p className="text-center text-gray-500">
//             No API base URL configured.
//           </p>
//         </div>
//       </section>
//     );
//   }

//   try {
//     const response = await fetch(productsUrl);
//     if (!response.ok) {
//       throw new Error(
//         `Fetch failed: ${response.status} ${response.statusText}`,
//       );
//     }

//     const data = await response.json();
//     const products = data?.products ?? [];

//     if (!Array.isArray(products) || products.length === 0) {
//       return (
//         <section
//           className="mt-6 px-4 md:px-8"
//           aria-labelledby="product-heading"
//         >
//           <div className="max-w-7xl mx-auto">
//             <h2
//               id="product-heading"
//               className="text-2xl font-bold text-slate-900 mb-8"
//             >
//               Products for you!!!!
//             </h2>
//             <p className="text-center text-gray-500">No products available.</p>
//           </div>
//         </section>
//       );
//     }

//     return (
//       <section className="mt-6 px-4 md:px-8" aria-labelledby="product-heading">
//         <div className="max-w-7xl mx-auto">
//           <h2
//             id="product-heading"
//             className="text-2xl font-bold text-slate-900 mb-8"
//           >
//             Products for you!!!!
//           </h2>

//           <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4">
//             {products.map((row: any) => (
//               <li key={row.id}>
//                 <Link
//                   href={`/product/${row.id}`}
//                   className="block bg-gray-100 p-3 rounded-lg cursor-pointer group overflow-hidden relative z-50 hover:before:bg-black focus-visible:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
//                 >
//                   <div className="w-full aspect-4/5 overflow-hidden mx-auto">
//                     <img
//                       src={row.thumbnail}
//                       alt={row.title}
//                       className="h-full w-full object-contain"
//                     />
//                   </div>

//                   <p className="text-center font-semibold text-lg mt-2">
//                     {row.title}
//                   </p>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//     );
//   } catch (error: any) {
//     console.error("HomeProductGrid fetch error", error);
//     return (
//       <section className="mt-6 px-4 md:px-8" aria-labelledby="product-heading">
//         <div className="max-w-7xl mx-auto">
//           <h2
//             id="product-heading"
//             className="text-2xl font-bold text-slate-900 mb-8"
//           >
//             Products for you!!!!
//           </h2>
//           <p className="text-center text-gray-500">
//             Unable to load products right now.
//           </p>
//         </div>
//       </section>
//     );
//   }
// }

