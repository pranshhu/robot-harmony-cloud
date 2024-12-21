import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const mockAlerts = [
  { id: 1, severity: "critical", message: "Robot-C3 battery critically low", timestamp: "2 minutes ago" },
  { id: 2, severity: "warning", message: "Robot-A1 temperature above threshold", timestamp: "15 minutes ago" },
  { id: 3, severity: "info", message: "Robot-B2 completed maintenance", timestamp: "1 hour ago" },
  { id: 4, severity: "critical", message: "Robot-D4 connection lost", timestamp: "2 hours ago" },
  { id: 5, severity: "warning", message: "Robot-E5 requires maintenance", timestamp: "3 hours ago" },
];

const severityColors = {
  critical: "destructive",
  warning: "yellow",
  info: "blue",
} as const;

const Alerts = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Alerts</h1>
              <p className="text-muted-foreground">System alerts and notifications</p>
            </div>
            <SidebarTrigger />
          </div>

          <Card>
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