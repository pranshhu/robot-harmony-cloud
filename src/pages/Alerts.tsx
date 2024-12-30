import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
    import { Badge } from "@/components/ui/badge";
    import { ScrollArea } from "@/components/ui/scroll-area";
    import { AlertCircle } from "lucide-react";
    import PageHeader from "@/components/PageHeader";

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
        <div>
          <PageHeader title="Alerts" description="System alerts and notifications" />

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <AlertCircle className="h-4 w-4" />
                Recent Alerts
              </CardTitle>
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
        </div>
      );
    };

    export default Alerts;
