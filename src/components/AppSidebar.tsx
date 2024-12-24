import { LayoutDashboard, Bot, Bell, Settings, Activity, Users, ChevronDown } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { useState } from "react";

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
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center justify-between px-2">
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <button
              onClick={() => setIsNavigationVisible(!isNavigationVisible)}
              className="p-1 hover:bg-accent rounded-md transition-colors"
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
                    <SidebarMenuButton asChild>
                      <Link to={item.url} className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
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