import { CategoryCreateForm } from "@/components/category/CategoryCreateForm";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Category Create || Admin Portal ",

} 

export default function CMSCreateCategoryPage() {
  return (
    <section className="w-full flex flex-col gap-5">
      <div className="flex w-full justify-between border-b border-b-gray-300 items-center pb-2  ">
        <h1 className="text-3xl font-semibold text-gray-900">
          Category Listing Page
        </h1>
        </div>

        <div className="w-full ">
           <CategoryCreateForm />
        </div>

        
    </section>
  );
}
