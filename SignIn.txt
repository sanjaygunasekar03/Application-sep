import React, { useState } from "react";
import { Phone, Eye, EyeOff, Loader, ChevronRight } from "lucide-react";

const SignIn = ({ setCurrentView }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCurrentView("dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-100 p-3 rounded-xl mr-3">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Standard Practice</h1>
          </div>

          <h2 className="text-2xl font-bold text-center mb-2">Sign In</h2>

          <div className="space-y-4 mb-6">
            <input
              type="email"
              defaultValue="alvin@bristolhcs.com"
              className="w-full px-4 py-3 border rounded-xl"
              placeholder="Business email"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 border rounded-xl pr-12"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          <button
            onClick={handleSignIn}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 mr-2 animate-spin" /> Signing in...
              </>
            ) : (
              <>
                Continue <ChevronRight className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
