import { Link } from "react-router-dom";
import { LayoutDashboard, Bot, Bell, Settings, Activity, Users } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
}

const menuItems = [
  { icon: LayoutDashboard, title: "Dashboard", url: "/" },
  { icon: Bot, title: "Robots", url: "/robots" },
  { icon: Activity, title: "Telemetry", url: "/telemetry" },
  { icon: Bell, title: "Alerts", url: "/alerts" },
  { icon: Users, title: "Team", url: "/team" },
  { icon: Settings, title: "Settings", url: "/settings" },
];

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <SidebarProvider>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2 animate-fade-in">
        <div className="space-y-0.5">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <nav className="flex items-center space-x-1">
          <TooltipProvider delayDuration={0}>
            {menuItems.map((item) => (
              <Tooltip key={item.title}>
                <TooltipTrigger asChild>
                  <Link
                    to={item.url}
                    className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-accent transition-colors hover:scale-105 transform duration-200"
                    aria-label={item.title}
                  >
                    <item.icon className="h-4 w-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="bg-popover/80 backdrop-blur-sm">
                  {item.title}
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </nav>
      </div>
    </SidebarProvider>
  );
};

export default PageHeader;