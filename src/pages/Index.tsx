import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import FleetStats from "@/components/FleetStats";
import RobotCard from "@/components/RobotCard";
import { Link } from "react-router-dom";
import { LayoutDashboard, Bot, Bell, Settings, Activity, Users } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const menuItems = [
  { icon: LayoutDashboard, title: "Dashboard", url: "/" },
  { icon: Bot, title: "Robots", url: "/robots" },
  { icon: Activity, title: "Telemetry", url: "/telemetry" },
  { icon: Bell, title: "Alerts", url: "/alerts" },
  { icon: Users, title: "Team", url: "/team" },
  { icon: Settings, title: "Settings", url: "/settings" },
];

const mockRobots = [
  { name: "Robot-A1", status: "online", battery: 87, temperature: 42, signalStrength: 95 },
  { name: "Robot-B2", status: "online", battery: 92, temperature: 38, signalStrength: 88 },
  { name: "Robot-C3", status: "error", battery: 23, temperature: 58, signalStrength: 45 },
  { name: "Robot-D4", status: "offline", battery: 0, temperature: 21, signalStrength: 0 },
  { name: "Robot-E5", status: "online", battery: 78, temperature: 44, signalStrength: 92 },
  { name: "Robot-F6", status: "online", battery: 85, temperature: 41, signalStrength: 87 },
] as const;

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <main className="flex-1 p-8">
          <div className="flex items-center space-x-2 mb-8">
            <SidebarTrigger />
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
          
          <div>
            <h1 className="text-3xl font-bold">Fleet Dashboard</h1>
            <p className="text-muted-foreground">Monitor and manage your robot fleet</p>
          </div>
          
          <div className="mt-8">
            <FleetStats />
          </div>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Active Robots</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockRobots.map((robot) => (
              <RobotCard key={robot.name} {...robot} />
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;