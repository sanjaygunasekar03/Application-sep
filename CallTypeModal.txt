import React, { useState } from "react";
import { X, Shield, ChevronRight } from "lucide-react";

const CallTypeModal = ({ setIsModalOpen, setBatches, newBatchId, setNewBatchId }) => {
  const [callType, setCallType] = useState("claimStatus");

  const handleSave = () => {
    const newBatch = {
      id: `B-${newBatchId}`,
      title: `New Batch ${newBatchId}`,
      date: new Date().toLocaleDateString(),
      calls: "0 / 0",
      info: "0",
      status: "Draft",
      type: callType,
      created: new Date().toLocaleDateString(),
    };

    setBatches((prev) => [newBatch, ...prev]);
    setNewBatchId((p) => p + 1);
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold">Select Call Type</h2>
          <button onClick={() => setIsModalOpen(false)}>
            <X />
          </button>
        </div>

        <div className="border rounded-xl p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold">Claim Status</h3>
            <Shield className="text-blue-500" />
          </div>

          <button
            onClick={() => setCallType("claimStatus")}
            className="w-full border py-2 rounded-lg"
          >
            {callType === "claimStatus" ? "Selected" : "Select Call Type"}
          </button>
        </div>

        <button
          onClick={handleSave}
          className="w-full py-3 bg-blue-600 text-white rounded-lg mt-6 flex items-center justify-center"
        >
          Continue <ChevronRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default CallTypeModal;
