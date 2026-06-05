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

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 50,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      minlength: 2,
      maxlength: 40,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      default: null,
    },
    address: String,
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    image: ImageSchema,
  },
  {
    timestamps: true,
    autoIndex: true,
    autoCreate: true,
  }
);

export const UserModel = mongoose.model("User", UserSchema);
