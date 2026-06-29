import {
  CheckCircleIcon,
  DocumentTextIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const features = [
  "10+ Professional Resume Templates",
  "ATS Friendly Resume Builder",
  "Download PDF Instantly",
];

export default function LoginLeftPanel() {
  return (
    <div className="flex w-full flex-col justify-between bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 p-12 text-white">
      {/* Logo */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
            <DocumentTextIcon className="h-8 w-8" />
          </div>

          <div>
            <h1 className="text-3xl font-bold">Resume Builder</h1>
            <p className="text-sm text-blue-100">
              Build your dream career
            </p>
          </div>
        </div>
      </div>

      {/* Center Content */}
      <div className="space-y-8">
        <SparklesIcon className="h-16 w-16 text-yellow-300" />

        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Create a Professional Resume
          </h2>

          <p className="mt-5 max-w-md text-lg text-blue-100">
            Build beautiful resumes in minutes using modern,
            recruiter-approved templates.
          </p>
        </div>

        <div className="space-y-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <CheckCircleIcon className="h-6 w-6 text-green-300" />

              <span className="text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-sm text-blue-200">
        © 2026 Resume Builder. All rights reserved.
      </div>
    </div>
  );
}