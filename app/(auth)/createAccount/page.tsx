
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be less than 20 characters"),

    age: z
      .number()
      .min(18, "You must be at least 18")
      .max(100, "Age must be less than 100"),

    email: z.string().email("Invalid email"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    passwordAgain: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.passwordAgain, {
    message: "Passwords do not match",
    path: ["passwordAgain"],
  });

type LoginForm = z.infer<typeof schema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(schema),
  });

  const submit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit(submit)}
        className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Enter your information to create your account
          </p>
        </div>

        {/* Name */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-zinc-200">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-white focus:ring-1 focus:ring-white"
          />

          {errors.name && (
            <p className="mt-1.5 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Age */}
        <div className="mb-5">
          <label className="mb-2 block text-sm font-medium text-zinc-200">
            Age
          </label>

          <input
            type="number"
            placeholder="Enter your age"
            {...register("age", { valueAsNumber: true })}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-white focus:ring-1 focus:ring-white"
          />

          {errors.age && (
            <p className="mt-1.5 text-sm text-red-400">
              {errors.age.message}
            </p>
          )}
        </div>

        {/* Email */}
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

        {/* Password */}
        <div className="mb-5">
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

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-zinc-200">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Enter your password again"
            {...register("passwordAgain")}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-white focus:ring-1 focus:ring-white"
          />

          {errors.passwordAgain && (
            <p className="mt-1.5 text-sm text-red-400">
              {errors.passwordAgain.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-lg bg-white py-3 font-semibold text-black transition hover:bg-zinc-200 active:scale-[0.98]"
        >
          Create Account
        </button>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <span className="cursor-pointer text-white hover:underline">
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
