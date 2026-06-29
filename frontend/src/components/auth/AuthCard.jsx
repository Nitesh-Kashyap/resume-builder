export default function AuthCard({ children }) {
  return (
    <div
      className="
        w-full
        max-w-lg
        rounded-3xl
        bg-white
        p-10
        shadow-xl
        border
        border-slate-100
        transition-all
        duration-300
        hover:shadow-2xl
      "
    >
      {children}
    </div>
  );
}