
"use client";
import axiosInstance from "@/lib/config/apiClient";
import next from "next";
import Link from "next/link";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { toast } from "sonner";
import Swal from "sweetalert2";


export interface ICategoryDetail {
  name: string;
  slug: string;
  parentId?: {name: string, slug: string, image: string, _id: string}; // same as from backend it comes in object becfore was string 
  image: string;
  _id: string;
}

export default function CategoryTable() {
  const [cats, setCats] = useState<ICategoryDetail[]>([]);

  const getAllCategories = async () => {
    try {
      const response = await axiosInstance.get("/category");
      console.log({response: response.data})
      setCats(response.data); // API returns array of categories
    } catch (exception) {
      toast.error("Error while fetching Category");
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const deleteCategory = async (id: string) => {
             const confirmed =   await  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
});
        if(confirmed.isConfirmed) {
          // del api
          try {
            await axiosInstance.delete("/category/"+id)
            await getAllCategories()
            toast.success("Category Deleted Sucessfully")
          } catch (exception) {
            toast.error("Error while deleting the category")
          
          }
        }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-5 w-full">
      <div className="overflow-x-auto w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-800 text-white">
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Slug</th>
              <th className="text-center p-3">Is Parent</th>
              <th className="text-center p-3">Image</th>
              <th className="text-center p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {cats.map((row: ICategoryDetail) => (
              <tr key={row._id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">
                  <div className="flex flex-col w-full">
                    {
                      row.parentId ? <span>
                      <span className="bg-teal-200 max w-50 border border-teal-500 rounded-b-md">{row?.parentId?.name}</span>
                    </span> : <></>
                    }
                  </div>
                  {row.name}</td>
                <td className="p-3 text-gray-600">{row.slug}</td>
                <td className="p-3 text-center">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      row.parentId
                        ? "bg-red-100 text-red-700"
                        : "bg-green-100 text-green-400"
                    }`}
                  >
                    {row.parentId ? "No" : "Yes"}
                  </span>
                </td>
                <td className="p-3">
                  <div className="flex justify-center">
                    <img
                      src={row.image}
                      alt="Category"
                      className="w-14 h-14 rounded-md object-cover"
                    />
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex justify-center gap-2">
                    <Link href={`/cms/categories/${row._id}/update`}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                      Edit
                    </Link>
                    <button onClick={(e: BaseSyntheticEvent) => {
                          deleteCategory(row._id)
                    }} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {cats.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center p-5 text-gray-500">
                  No categories found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
