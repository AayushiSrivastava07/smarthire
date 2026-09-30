import { useEffect, useState } from "react";
import {
  Plus,
  Trash2,
  GripVertical,
  X,
} from "lucide-react";

type Status = "Applied" | "Assessment" | "Interview" | "Offer";

type Application = {
  id: number;
  company: string;
  role: string;
};

type ApplicationData = Record<Status, Application[]>;

const columns: Status[] = [
  "Applied",
  "Assessment",
  "Interview",
  "Offer",
];

const colors: Record<Status, string> = {
  Applied: "bg-blue-50 border-blue-200",
  Assessment: "bg-yellow-50 border-yellow-200",
  Interview: "bg-purple-50 border-purple-200",
  Offer: "bg-green-50 border-green-200",
};

const initialData: ApplicationData = {
  Applied: [
    {
      id: 1,
      company: "TCS",
      role: "Frontend Developer",
    },
    {
      id: 2,
      company: "Infosys",
      role: "Developer",
    },
  ],
  Assessment: [
    {
      id: 3,
      company: "JTG",
      role: "Software Developer",
    },
  ],
  Interview: [
    {
      id: 4,
      company: "Wipro",
      role: "Engineer",
    },
  ],
  Offer: [
    {
      id: 5,
      company: "Google",
      role: "SDE",
    },
  ],
};

const STORAGE_KEY = "smarthire_applications";

export default function Applications() {
  const [data, setData] = useState<ApplicationData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      return initialData;
    }

    return initialData;
  });

  const [dragging, setDragging] = useState<{
    id: number;
    from: Status;
  } | null>(null);

  const [showForm, setShowForm] = useState(false);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<Status>("Applied");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const handleDrop = (toColumn: Status) => {
    if (!dragging) return;

    if (dragging.from === toColumn) {
      setDragging(null);
      return;
    }

    const card = data[dragging.from].find(
      (item) => item.id === dragging.id
    );

    if (!card) {
      setDragging(null);
      return;
    }

    setData((prev) => ({
      ...prev,
      [dragging.from]: prev[dragging.from].filter(
        (item) => item.id !== dragging.id
      ),
      [toColumn]: [...prev[toColumn], card],
    }));

    setDragging(null);
  };

  const handleDelete = (id: number, column: Status) => {
    setData((prev) => ({
      ...prev,
      [column]: prev[column].filter((item) => item.id !== id),
    }));
  };

  const handleAddApplication = (e: React.FormEvent) => {
    e.preventDefault();

    if (!company.trim() || !role.trim()) {
      return;
    }

    const newApplication: Application = {
      id: Date.now(),
      company: company.trim(),
      role: role.trim(),
    };

    setData((prev) => ({
      ...prev,
      [status]: [...prev[status], newApplication],
    }));

    setCompany("");
    setRole("");
    setStatus("Applied");
    setShowForm(false);
  };

  const totalApplications = columns.reduce(
    (total, column) => total + data[column].length,
    0
  );

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            My Applications
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Track and manage your job applications.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowForm(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          <Plus size={18} />
          Add Application
        </button>
      </div>

      {/* Summary */}
      <div className="rounded-xl border border-indigo-100 bg-indigo-50 px-5 py-4">
        <p className="text-sm text-indigo-700">
          Total Applications
        </p>

        <p className="mt-1 text-2xl font-bold text-indigo-900">
          {totalApplications}
        </p>
      </div>

      {/* Add Application Form */}
      {showForm && (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">
                Add New Application
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Add a company and move it through your hiring pipeline.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>

          <form
            onSubmit={handleAddApplication}
            className="grid gap-4 md:grid-cols-3"
          >
            <div>
              <label
                htmlFor="company"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Company
              </label>

              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Microsoft"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Job Role
              </label>

              <input
                id="role"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="e.g. Software Engineer"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div>
              <label
                htmlFor="status"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Status
              </label>

              <select
                id="status"
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value as Status)
                }
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                {columns.map((column) => (
                  <option key={column} value={column}>
                    {column}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <button
                type="submit"
                className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Add Application
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Application Board */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">

        {columns.map((column) => (
          <div
            key={column}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(column)}
            className={`min-h-80 rounded-2xl border p-4 ${colors[column]}`}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-gray-800">
                {column}
              </h3>

              <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-500 shadow-sm">
                {data[column].length}
              </span>
            </div>

            <div className="space-y-3">

              {data[column].length === 0 && (
                <div className="rounded-xl border border-dashed border-gray-300 bg-white/60 p-6 text-center">
                  <p className="text-xs text-gray-400">
                    Drop applications here
                  </p>
                </div>
              )}

              {data[column].map((card) => (
                <div
                  key={card.id}
                  draggable
                  onDragStart={() =>
                    setDragging({
                      id: card.id,
                      from: column,
                    })
                  }
                  className="group cursor-grab rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-md active:cursor-grabbing"
                >
                  <div className="flex items-start gap-2">

                    <GripVertical
                      size={18}
                      className="mt-0.5 shrink-0 text-gray-300"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-800">
                        {card.company}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {card.role}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(card.id, column)
                      }
                      className="rounded-lg p-1.5 text-gray-300 opacity-0 transition hover:bg-red-50 hover:text-red-500 group-hover:opacity-100"
                      aria-label="Delete application"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}