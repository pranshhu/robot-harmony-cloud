import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  variant?: "dashboard" | "robots" | "robot-details" | "default";
  className?: string;
}

const Layout = ({ children, variant = "default", className }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <main className={cn(
          "flex-1 container mx-auto px-4 py-2 md:px-6 md:py-4",
          "transition-all duration-300 animate-fade-in overflow-y-auto",
          className
        )}>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Layout;