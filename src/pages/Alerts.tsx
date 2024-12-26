import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
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

const mockAlerts = [
  { id: 1, severity: "critical", message: "Robot-C3 battery critically low", timestamp: "2 minutes ago" },
  { id: 2, severity: "warning", message: "Robot-A1 temperature above threshold", timestamp: "15 minutes ago" },
  { id: 3, severity: "info", message: "Robot-B2 completed maintenance", timestamp: "1 hour ago" },
  { id: 4, severity: "critical", message: "Robot-D4 connection lost", timestamp: "2 hours ago" },
  { id: 5, severity: "warning", message: "Robot-E5 requires maintenance", timestamp: "3 hours ago" },
];

const severityColors = {
  critical: "destructive",
  warning: "secondary",
  info: "default",
} as const;

const Alerts = () => {
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
            <h1 className="text-3xl font-bold">Alerts</h1>
            <p className="text-muted-foreground">System alerts and notifications</p>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-4">
                  {mockAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="flex items-center justify-between p-4 rounded-lg border"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant={severityColors[alert.severity as keyof typeof severityColors]}>
                            {alert.severity}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{alert.timestamp}</span>
                        </div>
                        <p className="text-sm font-medium">{alert.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Alerts;