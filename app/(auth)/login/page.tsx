"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});

type SignInForm = z.infer<typeof schema>;

export default function SignIn() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(schema),
  });

  const submit = async (data: SignInForm) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    console.log("RESULT:", result);

    if (result?.ok) {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 px-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
          >
            <span>←</span>
            Home
          </Link>
        </div>

        <form
          onSubmit={handleSubmit(submit)}
          className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl"
        >
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-white">Sign In</h1>
            <p className="mt-2 text-sm text-zinc-400">
              Sign in to your account
            </p>
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-sm font-medium text-zinc-200">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-white focus:ring-1 focus:ring-white"
            />

            {errors.email && (
              <p className="mt-1.5 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-zinc-200">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-white focus:ring-1 focus:ring-white"
            />

            {errors.password && (
              <p className="mt-1.5 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-white py-3 font-semibold text-black transition hover:bg-zinc-200 active:scale-[0.98]"
          >
            Sign In
          </button>

          <p className="mt-6 text-center text-sm text-zinc-500">
            Don't have an account?
            <Link
              href="/createAccount"
              className="text-white transition hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}