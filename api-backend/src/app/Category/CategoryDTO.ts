import z from "zod";

const CategoryDTO = z.object({
    name: z.string().min(3, " Category anme must be atleast 3 CHar").max(50, "Category char cant exceed than 50"),
    parentId: z.string().nullable().optional()
})
export default CategoryDTO;