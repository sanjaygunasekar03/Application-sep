import React from "react";
import {
  Phone, X, Menu, Home, FileText, File, Users, Plus, Settings,
  HelpCircle, LogOut, User
} from "lucide-react";

const Sidebar = ({
  isMenuOpen,
  setIsMenuOpen,
  activeDashboardTab,
  setActiveDashboardTab,
  setCurrentView,
  handleCreateCallBatch
}) => {
  return (
    <aside className={`${isMenuOpen ? "w-64" : "w-16"} bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}>
      <div className="p-4 flex items-center justify-between border-b">
        {isMenuOpen && (
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Phone className="w-5 h-5 text-blue-600" />
            </div>
            <h1 className="font-bold text-gray-900">Standard Practice</h1>
          </div>
        )}

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {[
          { name: "Dashboard", icon: Home, key: "dashboard" },
          { name: "Calls", icon: Phone, key: "calls" },
          { name: "Batches", icon: FileText, key: "batches" },
          { name: "Templates", icon: File, key: "templates" },
          { name: "Contact Insights", icon: Users, key: "insights" },
        ].map(item => (
          <button
            key={item.key}
            onClick={() => setActiveDashboardTab(item.key)}
            className={`w-full flex items-center px-3 py-3 rounded-lg ${
              activeDashboardTab === item.key ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {isMenuOpen && item.name}
          </button>
        ))}

        <button onClick={handleCreateCallBatch} className="w-full flex items-center px-3 py-3 rounded-lg mt-4">
          <Plus className="w-5 h-5 mr-3" />
          {isMenuOpen && "Create Call Batch"}
        </button>
      </nav>

      <div className="border-t p-4">
        <button className="w-full flex items-center px-3 py-3">
          <Settings className="w-5 h-5 mr-3" />
          {isMenuOpen && "Settings"}
        </button>

        <button className="w-full flex items-center px-3 py-3">
          <HelpCircle className="w-5 h-5 mr-3" />
          {isMenuOpen && "Help Center"}
        </button>

        <button onClick={() => setCurrentView("signIn")} className="w-full flex items-center px-3 py-3">
          <LogOut className="w-5 h-5 mr-3" />
          {isMenuOpen && "Log Out"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
