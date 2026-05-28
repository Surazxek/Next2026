import { createContext } from "react";
import {IAuthContext} from "../type/AuthContexType"



const AuthContext = createContext<IAuthContext>({
  login: async () => {},
  loggedInUser: null,
  getLoggedInUser: async () => {},
});

export default AuthContext;
