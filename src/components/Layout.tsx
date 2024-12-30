import React from "react";
    import { PageHeader } from "./PageHeader";

    interface LayoutProps {
      children: React.ReactNode;
      variant?: "dashboard" | "robots" | "robot-details" | "default";
    }

    const Layout = ({ children, variant = "default" }: LayoutProps) => {
      return (
        <div className="min-h-screen flex w-full">
          <main className={`flex-1 p-4 md:p-8 ${variant === 'dashboard' ? 'md:ml-0' : ''}`}>
            {children}
          </main>
        </div>
      );
    };

    export default Layout;
