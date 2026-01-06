import React, { useState } from "react";
import { Plus, Filter, Search, User } from "lucide-react";

const Batches = ({ batches, handleCreateCallBatch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Search Batches</h1>

        <button
          onClick={handleCreateCallBatch}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="mr-1" /> Create Call Batch
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <input
          className="flex-1 px-3 py-2 border rounded-lg"
          placeholder="Search batches"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="flex items-center px-4 py-2 border rounded-lg"
        >
          <Filter className="mr-2" /> Filter
        </button>
      </div>

      {filterOpen && (
        <div className="bg-white border rounded-xl p-6 mb-6">
          Filters UI (same as original — works visually only)
        </div>
      )}

      <table className="min-w-full bg-white border rounded-xl">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500">
              Created On
            </th>
            <th className="px-6 py-3">Batch ID</th>
            <th className="px-6 py-3">Title</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {batches.map((b) => (
            <tr key={b.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 flex items-center">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <User className="w-4 h-4 text-blue-600" />
                </div>
                {b.created}
              </td>
              <td>{b.id}</td>
              <td>{b.title}</td>
              <td>{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Batches;
