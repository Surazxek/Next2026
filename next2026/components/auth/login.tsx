"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, type Icredentials } from "@/lib/type/AuthType";
import { useAuth } from "@/lib/hook/useAuth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Icredentials>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const router = useRouter();


  const { login } = useAuth();

  const submitHandle = async (data: Icredentials) => {
    try {
      // const response = await login(data);
      // // console.log(response); // to check data
       await login(data)
       router.push("/cms")

    } catch (error) {
      console.error("Login submit failed", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandle)} className="flex flex-col gap-5">
      <Controller
        control={control}
        name="username"
        render={({ field }) => (
          <div className="relative">
            <input
              autoComplete="off"
              id="username"
              type="text"
              {...field}
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
              placeholder="username"
            />

            <label
              htmlFor="username"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all"
            >
              User name
            </label>

            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors?.username?.message}
              </p>
            )}
          </div>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <div className="relative">
            <input
              autoComplete="off"
              id="password"
              type="password"
              {...field}
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none"
              placeholder="password"
            />

            <label
              htmlFor="password"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all"
            >
              Password
            </label>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors?.password?.message}
              </p>
            )}
          </div>
        )}
      />

      <div className="flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 cursor-pointer hover:bg-gray-100 transition">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google"
          className="w-5 h-5"
        />
        <span className="text-sm font-medium text-gray-700">
          Login with Google
        </span>
      </div>

      <button
        type="submit"
        className="bg-cyan-500 text-white rounded-md px-4 py-2"
      >
        Submit
      </button>
    </form>
  );
}
