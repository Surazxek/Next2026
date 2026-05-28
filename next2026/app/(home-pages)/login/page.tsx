import LoginForm from "@/components/auth/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Login page description"
}

export default function LoginPage() {
  return (
    <div className="bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 min-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:px-20">
          <div className="max-w-7xl p-10">
            <div>
              <h1 className="text-2xl font-semibold">Login</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
