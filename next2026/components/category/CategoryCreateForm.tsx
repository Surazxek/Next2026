'use client'
import z from "zod";
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { FormLabel } from "../ui/form/Label";
import { FileInput, SelectInput, TextInput } from "../ui/form/Input";
import { FormActionButton } from "../ui/buttons/FormButtons";

const CategoryDTO = z.object({
    name: z.string().min(3, "Min char min 3 ").max(50, "Max Char is 50 "),
    parentId: z.string().nullable().optional(),
    image: z.file().nullable().optional()
})

type CategoryData = z.infer<typeof CategoryDTO>

export const CategoryCreateForm = () => {
    const {control, handleSubmit, formState:{errors, isSubmitting} } =useForm({
        defaultValues: {
            name: "",
            parentId: "",
            image: null
        }, 
        resolver: zodResolver(CategoryDTO)
    })
  
   const submitForm = (data: CategoryData) => {
     console.log(data)
   }


    return(<>
    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-2" >
      <div className="flex w-full items-center">
        <FormLabel className="w-1/3" htmlFor="name"> Name:</FormLabel>
        <div className="w-2/3 flex flex-col">
           <TextInput name="name" control={control} errMsg={errors?.name?.message} />
        </div>
      </div>
        
        {/* //parentId */}

        <div className="flex w-full items-center">
        <FormLabel className="w-1/3" htmlFor="parentId"> Sub Category</FormLabel>
        <div className="w-2/3 flex flex-col">
           <SelectInput name="parentId" control={control} options={[]} errMsg={errors?.parentId?.message} />
        </div>
      </div>

    <div className="flex w-full items-center">
        <FormLabel className="w-1/3" htmlFor="Image"> Image(icon)</FormLabel>
        <div className="w-2/3 flex flex-col">
        <FileInput  name="image" control={control} errMsg={errors?.image?.message} />
        </div>
      </div>

     <div className="flex w-full items-center gap-3">
        <FormActionButton disabled={isSubmitting} type="reset">Cancel</FormActionButton>
         <FormActionButton disabled={isSubmitting}   type="submit">Submit</FormActionButton>
      </div>


    </form>
        </>)
}