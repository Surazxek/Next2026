export interface IImage{
    fieldname: String,
  originalname: String,
  encoding: String,
  mimetype: String,
  destination: String,
  filename: String,
  path: String,
  size: Number,
}




export interface IUserDetail {
    name: string,
    email: string,
    username: string,
    phone: string,
    address: string,
    role: string,
    image: IImage;
}