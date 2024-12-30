import React from "react";
import { PageHeader } from "./PageHeader";
import { SidebarProvider } from "@/components/ui/sidebar";

interface LayoutProps {
  children: React.ReactNode;
  variant?: "dashboard" | "robots" | "robot-details" | "default";
}

const Layout = ({ children, variant = "default" }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <main className={`flex-1 container mx-auto p-4 md:p-8 transition-all duration-300 animate-fade-in`}>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;