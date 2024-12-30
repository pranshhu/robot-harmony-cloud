import React from "react";
import PageHeader from "./PageHeader";
import { SidebarProvider } from "@/components/ui/sidebar";

interface LayoutProps {
  children: React.ReactNode;
  variant?: "dashboard" | "robots" | "robot-details" | "default";
}

const Layout = ({ children, variant = "default" }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <main className="flex-1 container mx-auto px-4 py-2 md:px-6 md:py-4 transition-all duration-300 animate-fade-in overflow-y-auto">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;