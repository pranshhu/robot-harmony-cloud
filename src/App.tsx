import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import { AuthProvider } from "./contexts/AuthContext";

const Index = lazy(() => import("./pages/Index.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));
const Robots = lazy(() => import("./pages/Robots.tsx"));
const RobotDetails = lazy(() => import("./pages/RobotDetails.tsx"));
const Telemetry = lazy(() => import("./pages/Telemetry.tsx"));
const Alerts = lazy(() => import("./pages/Alerts.tsx"));
const Team = lazy(() => import("./pages/Team.tsx"));
const Settings = lazy(() => import("./pages/Settings.tsx"));

const queryClient = new QueryClient();

// Protected Route wrapper component with role-based access
const ProtectedRoute = ({ 
  children, 
  requiredRole = "viewer" 
}: { 
  children: React.ReactNode;
  requiredRole?: "admin" | "manager" | "operator" | "viewer";
}) => {
  const { hasPermission } = useAuth();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  if (!hasPermission(requiredRole)) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Layout variant="dashboard">
                      <Index />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Layout variant="dashboard">
                      <Index />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/robots"
                element={
                  <ProtectedRoute requiredRole="operator">
                    <Layout variant="robots">
                      <Robots />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/robot/:id"
                element={
                  <ProtectedRoute requiredRole="operator">
                    <Layout variant="robot-details">
                      <RobotDetails />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/telemetry"
                element={
                  <ProtectedRoute requiredRole="operator">
                    <Layout variant="default">
                      <Telemetry />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/alerts"
                element={
                  <ProtectedRoute requiredRole="operator">
                    <Layout variant="default">
                      <Alerts />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/team"
                element={
                  <ProtectedRoute requiredRole="admin">
                    <Layout variant="default">
                      <Team />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute requiredRole="manager">
                    <Layout variant="default">
                      <Settings />
                    </Layout>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;