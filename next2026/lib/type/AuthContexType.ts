import { type Icredentials, type IUserDetail } from "./AuthType";


export  interface IAuthContext {
  login(data: Icredentials): Promise<IUserDetail | void>;
  loggedInUser: null | IUserDetail;
  getLoggedInUser(): Promise<IUserDetail | void>;
}

