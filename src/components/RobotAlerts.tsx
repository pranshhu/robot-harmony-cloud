import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

interface Alert {
  id: number;
  severity: "critical" | "warning" | "info";
  message: string;
  timestamp: string;
}

const mockAlerts: Alert[] = [
  { id: 1, severity: "critical", message: "Battery level critical", timestamp: "2 minutes ago" },
  { id: 2, severity: "warning", message: "Temperature above threshold", timestamp: "15 minutes ago" },
  { id: 3, severity: "info", message: "Scheduled maintenance due", timestamp: "1 hour ago" },
];

const severityColors = {
  critical: "destructive",
  warning: "secondary",
  info: "default",
} as const;

const RobotAlerts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5" />
          Recent Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center justify-between p-4 rounded-lg border"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant={severityColors[alert.severity]}>
                    {alert.severity}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{alert.timestamp}</span>
                </div>
                <p className="text-sm font-medium">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RobotAlerts;