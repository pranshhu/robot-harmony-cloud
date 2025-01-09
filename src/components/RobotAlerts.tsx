import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, AlertTriangle, Info } from "lucide-react";

interface Alert {
  id: number;
  severity: "critical" | "warning" | "info";
  message: string;
  timestamp: string;
}

const mockAlerts: Alert[] = [
  { id: 1, severity: "critical", message: "Battery level critical", timestamp: "2m" },
  { id: 2, severity: "warning", message: "Temperature above threshold", timestamp: "15m" },
  { id: 3, severity: "info", message: "Scheduled maintenance due", timestamp: "1h" },
];

const severityIcons = {
  critical: AlertCircle,
  warning: AlertTriangle,
  info: Info,
} as const;

const severityColors = {
  critical: "destructive",
  warning: "secondary",
  info: "default",
} as const;

const RobotAlerts = () => {
  return (
    <Card className="h-full">
      <CardHeader className="p-2">
        <CardTitle className="flex items-center gap-2 text-sm">
          <AlertCircle className="h-4 w-4" />
          Recent Alerts
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <div className="space-y-2">
          {mockAlerts.map((alert) => {
            const Icon = severityIcons[alert.severity];
            return (
              <div
                key={alert.id}
                className="flex items-center justify-between p-2 rounded-lg border bg-card/50 hover:bg-card/80 transition-colors"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={severityColors[alert.severity]} 
                      className="text-xs px-1 py-0 flex items-center gap-1"
                    >
                      <Icon className="h-3 w-3" />
                      {alert.severity}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                  </div>
                  <p className="text-xs font-medium">{alert.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RobotAlerts;