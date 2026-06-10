import Link from "next/link";

export default function CMSCategoryPage() {
  return (
    <section className="w-full flex flex-col gap-5">
      <div className="flex w-full justify-between border-b border-b-gray-300 items-center pb-2  ">
        <h1 className="text-3xl font-semibold text-gray-900">
          Category Listing Page
        </h1>
        <Link
          href="/cms/categories/create"
          className="bg-teal-600 px-5 py-2 text-white text-lg font-semibold rounded-xl transition hover:bg-teal-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Add Category
        </Link>
      </div>
    </section>
  );
}

