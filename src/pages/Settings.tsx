import { useState } from "react";
import {
  User,
  Bell,
  Briefcase,
  Shield,
  Save,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [jobAlerts, setJobAlerts] = useState(true);
  const [applicationUpdates, setApplicationUpdates] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState(true);

  const [name, setName] = useState("Aayushi Srivastava");
  const [email, setEmail] = useState("aayushi.srivastava2023@glbajajgroup.org");
  const [location, setLocation] = useState("Noida");
  const [jobType, setJobType] = useState("Full Time");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Settings saved successfully!");
  };

  return (
    <div className="max-w-4xl space-y-6">

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Settings
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your profile, job preferences and notifications.
        </p>
      </div>

      {/* Profile */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <User size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-gray-900">
              Profile Information
            </h2>

            <p className="text-sm text-gray-500">
              Update your personal information.
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="grid gap-5 md:grid-cols-2">

          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="location"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Preferred Location
            </label>

            <div className="relative">
              <MapPin
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                id="location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="jobType"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Preferred Job Type
            </label>

            <div className="relative">
              <Briefcase
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <select
                id="jobType"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full appearance-none rounded-xl border border-gray-300 bg-white py-3 pl-10 pr-10 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                <option>Full Time</option>
                <option>Internship</option>
                <option>Part Time</option>
                <option>Contract</option>
              </select>

              <ChevronDown
                size={17}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              <Save size={17} />
              Save Changes
            </button>
          </div>

        </form>
      </section>

      {/* Notifications */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <Bell size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-gray-900">
              Notifications
            </h2>

            <p className="text-sm text-gray-500">
              Choose which notifications you want to receive.
            </p>
          </div>
        </div>

        <div className="space-y-4">

          <SettingToggle
            title="Email Notifications"
            description="Receive important updates by email."
            enabled={emailNotifications}
            onChange={setEmailNotifications}
          />

          <SettingToggle
            title="Job Alerts"
            description="Get notified about matching job opportunities."
            enabled={jobAlerts}
            onChange={setJobAlerts}
          />

          <SettingToggle
            title="Application Updates"
            description="Receive updates about your application progress."
            enabled={applicationUpdates}
            onChange={setApplicationUpdates}
          />

        </div>
      </section>

      {/* Privacy */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <Shield size={22} />
          </div>

          <div>
            <h2 className="font-semibold text-gray-900">
              Privacy
            </h2>

            <p className="text-sm text-gray-500">
              Control how your profile information is used.
            </p>
          </div>
        </div>

        <SettingToggle
          title="Profile Visibility"
          description="Allow your profile to be visible within SmartHire."
          enabled={profileVisibility}
          onChange={setProfileVisibility}
        />
      </section>

      {/* Account Status */}
      <section className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-semibold text-indigo-900">
              SmartHire Account
            </h2>

            <p className="mt-1 text-sm text-indigo-700">
              Your account is active and ready to manage your job search.
            </p>
          </div>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Active
          </span>
        </div>
      </section>

    </div>
  );
}

type SettingToggleProps = {
  title: string;
  description: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
};

function SettingToggle({
  title,
  description,
  enabled,
  onChange,
}: SettingToggleProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
      <div>
        <h3 className="text-sm font-semibold text-gray-800">
          {title}
        </h3>

        <p className="mt-1 text-xs text-gray-500">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onChange(!enabled)}
        aria-label={`Toggle ${title}`}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled ? "bg-indigo-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}