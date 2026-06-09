import mongoose from "mongoose";
import { ImageSchema, SlugSchemaDecleration, UserSchemaDecleration } from "../Common/Schema";

const CategorySchema = new mongoose.Schema ({
    name: {
        type: String,
        min:3, max: 25,
        required: true,
        unique: true
    },
    slug: SlugSchemaDecleration,

    parentId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        default: null
    },
    image: ImageSchema,

    createdBy:  UserSchemaDecleration,

    updatedBy: UserSchemaDecleration
}, {
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
}
)

export const CategoryModel = mongoose.model("Category", CategorySchema)