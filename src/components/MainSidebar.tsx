import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { User, LayoutDashboard, Bot, Activity, Bell, Users, Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const menuItems = [
  { icon: User, title: "Profile", url: "/profile" },
  { icon: LayoutDashboard, title: "Dashboard", url: "/" },
  { icon: Bot, title: "Robots", url: "/robots" },
  { icon: Activity, title: "Analytics", url: "/analytics" },
  { icon: Bell, title: "Alerts", url: "/alerts" },
  { icon: Users, title: "Team", url: "/team" },
  { icon: Settings, title: "Settings", url: "/settings" },
];

export function MainSidebar() {
  const location = useLocation();

  return (
    <Sidebar side="right" variant="floating" collapsible="icon">
      <SidebarHeader className="p-2">
        <Link to="/" className="flex items-center justify-center">
          <img src="/placeholder.svg" alt="Logo" className="h-6 w-6" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <TooltipProvider delayDuration={0}>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.url}
                    >
                      <Link to={item.url} className="flex items-center justify-center">
                        <item.icon className="h-4 w-4" />
                        <span className="sr-only">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    {item.title}
                  </TooltipContent>
                </Tooltip>
              </SidebarMenuItem>
            ))}
          </TooltipProvider>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}