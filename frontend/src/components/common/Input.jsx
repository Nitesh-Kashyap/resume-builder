import { forwardRef } from "react";

const Input = forwardRef(function Input(
  {
    label,
    type = "text",
    placeholder,
    ...props
  },
  ref
) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        {...props}
      />
    </div>
  );
});

export default Input;