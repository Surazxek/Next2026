"use client";
import { ReactNode, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Icredentials, IUserDetail } from "../type/AuthType";
import { AppConfig } from "../config/AppConfig";
import axios from "axios";
import axiosInstance from "../config/apiClient";
import Cookies from "js-cookie";

export default function AuthProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [loading, setLoading] = useState<boolean>(true);
  const [loggedInUser, setLoggedInUser] = useState<IUserDetail | null>(null);

  const login = async (data: Icredentials): Promise<IUserDetail> => {
    try {
      const loginResponse = (await axiosInstance.post("/auth/login", data)) as {
        accessToken?: string;
        token?: string;
      };

      const token = loginResponse.accessToken ?? loginResponse.token;
      if (!token) {
        throw new Error("Login response did not include an auth token");
      }

      Cookies.set("_nxt_at_60", token, {
        secure: true,
        expires: 1,
        sameSite: "Strict",
      });

      const user = await getLoggedInUser();
      if (user) {
        return user;
      }

      const fallbackUser: IUserDetail = {
        id: String(Date.now()),
        firstName: data.username,
        lastName: data.username,
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
      const userDetail = (await axiosInstance.get("/auth/me")) as IUserDetail;
      setLoggedInUser(userDetail);
      return userDetail;
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
