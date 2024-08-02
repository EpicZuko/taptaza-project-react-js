// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserPage from "./pages/user/UserPage";
import Admin from "./pages/admin/Admin";
import { AuthProvider } from "./services/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import About from "./components/About";
import InnerPage from "./components/Innerpage";

function App() {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/" element={<UserPage />} />

          <Route path="/about" element={<About />} />
          <Route path="/inner-page/:id" element={<InnerPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
