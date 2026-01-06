import React, { useState } from "react";
import { Phone, Menu, X, User } from "lucide-react";

import Sidebar from "./components/Sidebar";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import Batches from "./components/Batches";
import Calls from "./components/Calls";
import Templates from "./components/Templates";
import Insights from "./components/Insights";
import CallTypeModal from "./components/CallTypeModal";

const App = () => {
  const [currentView, setCurrentView] = useState("signIn");
  const [activeDashboardTab, setActiveDashboardTab] = useState("dashboard");
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [batches, setBatches] = useState([
    { id: "B-1011", title: "IVR Batch 1205 Part3", date: "Dec 20th, 2025", calls: "83 / 98", info: "0", status: "Review", type: "claimStatus", created: "12/5/2025" },
    { id: "B-1010", title: "IVR Batch 1205 Part1", date: "Dec 18th, 2025", calls: "9 / 19", info: "0", status: "Review", type: "claimStatus", created: "12/5/2025" },
    { id: "B-1009", title: "IVR Batch 1205 Part2", date: "Dec 5th, 2025", calls: "3 / 20", info: "0", status: "Review", type: "claimStatus", created: "12/5/2025" },
    { id: "B-1005", title: "BHS IVR Sample Claim Wise 1120", date: "Nov 21st, 2025", calls: "15 / 17", info: "0", status: "Review", type: "claimStatus", created: "11/21/2025" },
  ]);

  const [newBatchId, setNewBatchId] = useState(1000);

  const handleCreateCallBatch = () => setIsModalOpen(true);

  return currentView === "signIn" ? (
    <SignIn setCurrentView={setCurrentView} />
  ) : (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeDashboardTab={activeDashboardTab}
        setActiveDashboardTab={setActiveDashboardTab}
        setCurrentView={setCurrentView}
        handleCreateCallBatch={handleCreateCallBatch}
      />

      <main className="flex flex-col flex-1 overflow-hidden">
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px  -6">
          <div className="flex items-center">
            <button className="text-gray-500 hover:text-gray-700 mr-4 md:hidden">
              <Menu className="w-5 h-5" />
            </button>
            <div className="text-xs text-gray-500">
              Outside Call Hours | Regular call hours: Mon-Fri, 11am-9pm EST | IVR call hours: 24/7 | Holidays may affect call hours.
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500 hidden md:block">Contact us</span>
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          {activeDashboardTab === "dashboard" && (
            <Dashboard
              batches={batches}
              setBatches={setBatches}
              newBatchId={newBatchId}
              setNewBatchId={setNewBatchId}
              handleCreateCallBatch={handleCreateCallBatch}
            />
          )}

          {activeDashboardTab === "batches" && (
            <Batches batches={batches} handleCreateCallBatch={handleCreateCallBatch} />
          )}

          {activeDashboardTab === "calls" && <Calls />}

          {activeDashboardTab === "templates" && <Templates />}

          {activeDashboardTab === "insights" && <Insights />}
        </div>
      </main>

      {isModalOpen && (
        <CallTypeModal
          setIsModalOpen={setIsModalOpen}
          setBatches={setBatches}
          newBatchId={newBatchId}
          setNewBatchId={setNewBatchId}
        />
      )}
    </div>
  );
};

export default App;
