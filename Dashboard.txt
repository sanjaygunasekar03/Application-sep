import React, { useState } from "react";
import {
  Plus, RefreshCw, AlertCircle, ChevronDown, Calendar, Clock, Phone,
  MessageSquare, User, ChevronLeft, ChevronRight, CheckCircle, FileText
} from "lucide-react";

const Dashboard = ({ batches, setBatches, newBatchId, setNewBatchId, handleCreateCallBatch }) => {

  // Local dashboard UI states
  const [timeframeDropdownOpen, setTimeframeDropdownOpen] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState("last30Days");

  const [inQueueDropdownOpen, setInQueueDropdownOpen] = useState(false);
  const [inQueueTimeframe, setInQueueTimeframe] = useState("today");

  // Static UI data
  const batchStatuses = ["Draft", "In Queue", "Review", "Completed"];

  const timeframes = [
    { id: "last7Days", name: "Last 7 Days" },
    { id: "last30Days", name: "Last 30 Days" },
    { id: "last6Months", name: "Last 6 Months" },
    { id: "allTime", name: "All Time" },
  ];

  const inQueueTimeframes = [
    { id: "today", name: "Today" },
    { id: "thisWeek", name: "This Week" },
    { id: "thisMonth", name: "This Month" },
  ];

  const topContacts = [
    { id: 1, name: "MEDICARE FL I", phone: "+18778474992", percentage: 85, calls: 98 },
    { id: 2, name: "HUMANA I", phone: "+18003677587", percentage: 0, calls: 7 },
    { id: 3, name: "TRICARE FOR LIFE I", phone: "+18667730404", percentage: 83, calls: 6 },
    { id: 4, name: "AETNA I", phone: "+18886323862", percentage: 50, calls: 4 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Call Dashboard</h1>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Updated 1/6/2026 2:03 AM</span>

          <button className="flex items-center text-blue-600 hover:text-blue-800">
            <RefreshCw className="w-4 h-4 mr-1" /> Refresh
          </button>

          <div className="relative">
            <select className="pl-3 pr-8 py-2 border border-gray-300 rounded-lg">
              <option>Recently Viewed</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          <button
            onClick={handleCreateCallBatch}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center"
          >
            <Plus className="w-4 h-4 mr-1" /> Create Call Batch
          </button>
        </div>
      </div>

      {/* Top Contacts + Timeframe */}
      <div className="flex space-x-4 mb-6">

        <div className="relative">
          <button
            onClick={() => setTimeframeDropdownOpen(!timeframeDropdownOpen)}
            className="px-4 py-2 bg-gray-50 rounded-lg flex items-center"
          >
            <span className="mr-2">Last 30 Days</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {timeframeDropdownOpen && (
            <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
              {timeframes.map(tf => (
                <button
                  key={tf.id}
                  onClick={() => {
                    setSelectedTimeframe(tf.id);
                    setTimeframeDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  {tf.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {topContacts.map(contact => (
          <div key={contact.id} className="flex-1 bg-white border rounded-lg p-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">
                  {contact.name} | {contact.phone}
                </h3>

                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span className="bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded mr-1">
                    CS Check
                  </span>

                  <span className="flex items-center">
                    <AlertCircle className="w-3 h-3 mr-1 text-yellow-500" />
                    {contact.percentage}% avg
                  </span>
                </div>
              </div>

              <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {contact.calls} calls
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Batch Status Sections */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {batchStatuses.map((section, index) => (
          <div key={index} className="bg-white border rounded-xl overflow-hidden">
            <div className="bg-gray-900 text-white p-3 flex justify-between items-center">
              <div className="flex items-center">
                {index === 0 && <FileText className="w-4 h-4 mr-2" />}
                {index === 1 && <Clock className="w-4 h-4 mr-2" />}
                {index === 2 && <CheckCircle className="w-4 h-4 mr-2" />}
                {index === 3 && <CheckCircle className="w-4 h-4 mr-2" />}

                <h2 className="font-semibold">{section}</h2>
              </div>

              <button className="text-sm text-blue-300 hover:text-blue-200">
                View all
              </button>
            </div>

            <div className="p-4 min-h-[300px]">

              {/* REVIEW section */}
              {section === "Review" && (
                <div className="space-y-3">
                  {batches.filter(b => b.status === "Review").map(batch => (
                    <div key={batch.id} className="border rounded-lg p-3 hover:shadow-md">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium">{batch.title}</h3>
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                          Claim Status (IVR)
                        </span>
                      </div>

                      <div className="flex justify-between text-xs text-gray-500 mb-2">
                        <div className="flex items-center">
                          <div className="flex items-center mr-3">
                            <div className="w-5 h-5 bg-blue-100 rounded-full mr-1 flex items-center justify-center">
                              <Phone className="w-3 h-3 text-blue-600" />
                            </div>
                            {batch.calls}
                          </div>

                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-gray-100 rounded-full mr-1 flex items-center justify-center">
                              <MessageSquare className="w-3 h-3 text-gray-500" />
                            </div>
                            {batch.info} Info
                          </div>
                        </div>

                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {batch.date}
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          <User className="w-3 h-3 mr-1" />
                          {batch.created}
                        </div>

                        <button className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          Review
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* IN QUEUE section */}
              {section === "In Queue" && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-blue-500 mr-2" />

                      <div className="relative">
                        <button
                          onClick={() => setInQueueDropdownOpen(!inQueueDropdownOpen)}
                          className="text-sm text-blue-600 flex items-center"
                        >
                          {inQueueTimeframes.find(t => t.id === inQueueTimeframe)?.name}
                          <ChevronDown className="w-3 h-3 ml-1" />
                        </button>

                        {inQueueDropdownOpen && (
                          <div className="absolute mt-2 w-48 bg-white border rounded shadow-lg z-10">
                            {inQueueTimeframes.map(tf => (
                              <button
                                key={tf.id}
                                onClick={() => {
                                  setInQueueTimeframe(tf.id);
                                  setInQueueDropdownOpen(false);
                                }}
                                className="w-full text-left px-4 py-2 hover:bg-gray-50"
                              >
                                {tf.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="w-5 h-5 border rounded-full flex items-center justify-center">
                        <ChevronLeft className="w-3 h-3" />
                      </button>
                      <button className="w-5 h-5 border rounded-full flex items-center justify-center">
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {batches.filter(b => b.status === "In Queue").length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-4">
                      <Phone className="w-12 h-12 text-gray-300 mb-3" />
                      <p className="text-gray-500 mb-3">No calls in queue</p>

                      <button
                        onClick={() =>
                          setBatches(prev => [
                            {
                              id: `B-${newBatchId}`,
                              title: `Queue Batch ${newBatchId}`,
                              date: new Date().toLocaleDateString(),
                              calls: "0 / 0",
                              info: "0",
                              status: "In Queue",
                              type: "claimStatus",
                              created: new Date().toLocaleDateString(),
                            },
                            ...prev,
                          ])
                        }
                        className="text-blue-600 flex items-center"
                      >
                        <Plus className="w-4 h-4 mr-1" /> Create call batch
                      </button>
                    </div>
                  ) : (
                    batches
                      .filter(b => b.status === "In Queue")
                      .map(batch => (
                        <div key={batch.id} className="border rounded-lg p-3 hover:shadow-md">
                          <div className="flex justify-between mb-2">
                            <h3 className="font-medium">{batch.title}</h3>
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                              Claim Status (IVR)
                            </span>
                          </div>
                        </div>
                      ))
                  )}
                </div>
              )}

              {/* EMPTY placeholders for others */}
              {section !== "Review" && section !== "In Queue" && (
                <div className="h-full flex flex-col items-center justify-center p-4 text-center">
                  <Phone className="w-12 h-12 text-gray-300 mb-3" />
                  <p className="text-gray-500 mb-3">No {section.toLowerCase()} batches</p>

                  <button
                    onClick={handleCreateCallBatch}
                    className="text-blue-600 flex items-center"
                  >
                    <Plus className="w-4 h-4 mr-1" /> Create call batch
                  </button>
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
