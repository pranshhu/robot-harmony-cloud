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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <nav className="flex items-center space-x-1">
              <TooltipProvider delayDuration={0}>
                {menuItems.map((item) => (
                  <Tooltip key={item.title}>
                    <TooltipTrigger asChild>
                      <Link
                        to={item.url}
                        className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent transition-colors"
                        aria-label={item.title}
                      >
                        <item.icon className="h-5 w-5" />
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
