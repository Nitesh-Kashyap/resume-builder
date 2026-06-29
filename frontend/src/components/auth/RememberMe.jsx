export default function RememberMe() {
  return (
    <div className="flex items-center justify-between text-sm">
      <label className="flex items-center gap-2 text-slate-600">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />
        Remember me
      </label>

      <a
        href="/forgot-password"
        className="font-medium text-blue-600 hover:underline"
      >
        Forgot Password?
      </a>
    </div>
  );
}