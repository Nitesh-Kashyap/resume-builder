import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">

        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="mt-6">
          Welcome,
          <strong> {user?.full_name}</strong>
        </p>

        <p className="mt-2">
          {user?.email}
        </p>

      </div>
    </div>
  );
}