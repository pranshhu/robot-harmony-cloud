import { Bot, Bell, Settings, Activity, Users, ChevronDown, LayoutDashboard } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const menuItems = [
  { icon: LayoutDashboard, title: "Dashboard", url: "/" },
  { icon: Bot, title: "Robots", url: "/robots" },
  { icon: Activity, title: "Telemetry", url: "/telemetry" },
  { icon: Bell, title: "Alerts", url: "/alerts" },
  { icon: Users, title: "Team", url: "/team" },
  { icon: Settings, title: "Settings", url: "/settings" },
];

export function AppSidebar() {
  const [isNavigationVisible, setIsNavigationVisible] = useState(true);

  return (
    <Sidebar side="right" variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center justify-between px-2">
            <button
              onClick={() => setIsNavigationVisible(!isNavigationVisible)}
              className="p-1 hover:bg-accent/20 rounded-md transition-colors"
              aria-label={isNavigationVisible ? "Hide navigation" : "Show navigation"}
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  isNavigationVisible ? "" : "-rotate-90"
                }`}
              />
            </button>
          </div>
          {isNavigationVisible && (
            <SidebarGroupContent>
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton asChild>
                          <Link 
                            to={item.url} 
                            className="flex items-center justify-center hover:bg-accent/20 rounded-md transition-all duration-200 hover:scale-105"
                          >
                            <item.icon className="h-4 w-4" />
                          </Link>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent side="left" className="bg-background/95 backdrop-blur-sm">
                        <p>{item.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          )}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}