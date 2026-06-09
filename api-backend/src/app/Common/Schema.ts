import mongoose from "mongoose";

export const ImageSchema = new mongoose.Schema({
  fieldname: String,
  originalname: String,
  encoding: String,
  mimetype: String,
  destination: String,
  filename: String,
  path: String,
  size: Number,
});


export const SlugSchemaDecleration = {
  type: String,
  unique: true,
  required: true
}

export const UserSchemaDecleration = {
   type: mongoose.Types.ObjectId,
   ref: "User",
   default: null
}