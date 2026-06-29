import LoginLeftPanel from "../components/auth/LoginLeftPanel";
import LoginForm from "../components/auth/LoginForm";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl">
        {/* Left Side */}
        <div className="hidden w-1/2 lg:flex">
          <LoginLeftPanel />
        </div>

        {/* Right Side */}
        <div className="flex w-full items-center justify-center bg-white px-6 lg:w-1/2">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}