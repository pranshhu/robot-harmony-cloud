import React, { createContext, useContext, useState, useEffect } from "react";
import { User, UserRole } from "@/types/auth";
import { useToast } from "@/components/ui/use-toast";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  hasPermission: (requiredRole: UserRole) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data - replace with actual API call in production
const MOCK_USER: User = {
  id: "1",
  email: "admin@example.com",
  role: "admin",
  name: "Admin User",
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (isAuth === "true") {
      setUser(MOCK_USER);
    }
  }, []);

  const roleHierarchy: Record<UserRole, number> = {
    admin: 4,
    manager: 3,
    operator: 2,
    viewer: 1,
  };

  const hasPermission = (requiredRole: UserRole): boolean => {
    if (!user) return false;
    return roleHierarchy[user.role] >= roleHierarchy[requiredRole];
  };

  const login = async (email: string, password: string) => {
    // Mock login - replace with actual API call
    if (email && password) {
      localStorage.setItem("isAuthenticated", "true");
      setUser(MOCK_USER);
      toast({
        title: "Success",
        description: "Successfully logged in!",
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};