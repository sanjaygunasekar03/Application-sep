import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Templates = () => {
  const [ivrOnly, setIvrOnly] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [sortBy, setSortBy] = useState("most");

  const templates = [
    { id: 1, title: "New Template - AC Jan 05, 2026", datapoints: "1–4 Datapoints" },
    { id: 2, title: "New Template - AC Jan 02, 2026", datapoints: "1–2 Questions" },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Edit Call Templates</h1>

      <button
        onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
        className="px-4 py-2 border rounded-lg"
      >
        Sort <ChevronDown className="inline ml-2" />
      </button>

      {templates.map((t) => (
        <div key={t.id} className="border rounded-xl p-4 bg-white shadow-sm">
          <h3 className="font-semibold">{t.title}</h3>
          <p className="text-sm text-gray-500">{t.datapoints}</p>
        </div>
      ))}
    </div>
  );
};

export default Templates;
