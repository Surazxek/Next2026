"use client";
import { ReactNode, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Icredentials, IUserDetail } from "../type/AuthType";
import axiosInstance from "../config/apiClient";
import Cookies from "js-cookie";

export default function AuthProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [loading, setLoading] = useState<boolean>(true);
  const [loggedInUser, setLoggedInUser] = useState<IUserDetail | null>(null);

  const login = async (data: Icredentials): Promise<IUserDetail> => {
    try {
      const loginResponse = (await axiosInstance.post(
        "/auth/login",
        data,
      )) as unknown as {
        accessToken?: string;
        token?: string;
        data?: { accessToken?: string; token?: string };
      };

      const token =
        loginResponse.accessToken ??
        loginResponse.token ??
        loginResponse.data?.accessToken ??
        loginResponse.data?.token;

      if (!token) {
        throw new Error("Login response did not include an auth token");
      }

      Cookies.set("_nxt_at_60", token, {
        secure: process.env.NODE_ENV === "production",
        expires: 1,
        sameSite: "lax",
      });

      const user = await getLoggedInUser();
      if (user) {
        return user;
      }

      const fallbackUser: IUserDetail = {
        id: String(Date.now()),
        firstName: data.username,
        lastName: data.username,
        name: data.username,
        email: `${data.username}@example.com`,
        image: "",
        role: "user",
      };
      setLoggedInUser(fallbackUser);
      return fallbackUser;
    } catch (exception) {
      console.error("Login failed", exception);
      throw exception;
    }
  };

  const getLoggedInUser = async (): Promise<IUserDetail | void> => {
    try {
      const response = await axiosInstance.get("/auth/me");
      const user = (response as any)?.data ?? response;
      if (!user) {
        return undefined;
      }
      setLoggedInUser(user as IUserDetail);
      return user as IUserDetail;
    } catch (exception) {
      console.log("Error while fetching user details", exception);
      return undefined;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <AuthContext.Provider
          value={{
            login,
            loggedInUser,
            getLoggedInUser,
          }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
}

















// "use client";

// import { ReactNode, useEffect, useState } from "react";
// import AuthContext from "../context/AuthContext";
// import { Icredentials, IUserDetail } from "../type/AuthType";
// import axiosInstance from "../config/apiClient";
// import Cookies from "js-cookie";

// export default function AuthProvider({
//   children,
// }: Readonly<{ children: ReactNode }>) {
//   const [loading, setLoading] = useState<boolean>(true);
//   const [loggedInUser, setLoggedInUser] =
//     useState<IUserDetail | null>(null);

//   const login = async (
//     data: Icredentials
//   ): Promise<IUserDetail> => {
//     try {
//       const loginResponse = await axiosInstance.post(
//         "/auth/login",
//         data
//       );

//       console.log("LOGIN RESPONSE", loginResponse.data);

//       const token = loginResponse.data.data.accessToken;

//       if (!token) {
//         throw new Error(
//           "Login response did not include an auth token"
//         );
//       }

//       Cookies.set("_nxt_at_60", token, {
//         secure: process.env.NODE_ENV === "production",
//         expires: 1,
//         sameSite: "lax",
//       });

//       const user = await getLoggedInUser();

//       if (user) {
//         return user;
//       }

//       throw new Error(
//         "Failed to fetch logged in user"
//       );
//     } catch (exception) {
//       console.error("Login failed", exception);
//       throw exception;
//     }
//   };

//   const getLoggedInUser = async (): Promise<
//     IUserDetail | void
//   > => {
//     try {
//       const response = await axiosInstance.get(
//         "/auth/me"
//       );

//       console.log("ME RESPONSE", response.data);

//       const user = response.data.data;

//       if (!user) {
//         return undefined;
//       }

//       setLoggedInUser(user);

//       return user;
//     } catch (exception) {
//       console.log(
//         "Error while fetching user details",
//         exception
//       );
//       return undefined;
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getLoggedInUser();
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <AuthContext.Provider
//           value={{
//             login,
//             loggedInUser,
//             getLoggedInUser,
//           }}
//         >
//           {children}
//         </AuthContext.Provider>
//       )}
//     </>
//   );
// }











