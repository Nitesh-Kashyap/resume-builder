import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthCard from "./AuthCard";
import Input from "../common/Input";
import PasswordInput from "./PasswordInput";
import RememberMe from "./RememberMe";

import { loginSchema } from "../../validations/authSchema";
import authService from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await authService.login(data);

      const { token, user } = response.data.data;

      login({ token, user });

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    }
  };

  return (
    <AuthCard>
      <div className="space-y-7">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-500">
            Sign in to continue building your resume.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          noValidate
        >
          <div>
            <Input
              label="Email"
              type="email"
              placeholder="john@example.com"
              {...register("email")}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              {...register("password")}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <RememberMe />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full rounded-xl py-3 font-semibold text-white transition ${
              isSubmitting
                ? "cursor-not-allowed bg-slate-400"
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            }`}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-300"></div>
          <span className="text-sm text-slate-500">OR</span>
          <div className="h-px flex-1 bg-slate-300"></div>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center rounded-xl border border-slate-300 py-3 font-medium text-slate-700 hover:bg-slate-50"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Create Account
          </a>
        </p>
      </div>
    </AuthCard>
  );
}