import { Battery, Signal, ThermometerSun, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface RobotCardProps {
  id?: string;
  name: string;
  status: "online" | "offline" | "error";
  battery: number;
  temperature: number;
  signalStrength: number;
  className?: string;
}

const RobotCard = ({ 
  id = "1", 
  name, 
  status, 
  battery, 
  temperature, 
  signalStrength,
  className 
}: RobotCardProps) => {
  const navigate = useNavigate();
  
  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-500",
    error: "bg-red-500",
  };

  const getBatteryColor = (level: number) => {
    if (level > 70) return "text-green-500";
    if (level > 30) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <Card 
      className={cn(
        "hover:bg-card/60 transition-colors cursor-pointer",
        "group relative overflow-hidden",
        className
      )}
      onClick={() => navigate(`/robot/${id}`)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/5 group-hover:to-background/10 transition-all duration-300" />
      
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${statusColors[status]} animate-pulse`} />
            {name}
          </div>
        </CardTitle>
        <div className="text-xs text-muted-foreground capitalize flex items-center gap-1">
          <Activity className="w-3 h-3" />
          {status}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <Battery className={cn("h-4 w-4 mb-1", getBatteryColor(battery))} />
            <span className="text-sm font-mono">{battery}%</span>
          </div>
          <div className="flex flex-col items-center">
            <ThermometerSun className="h-4 w-4 text-muted-foreground mb-1" />
            <span className="text-sm font-mono">{temperature}°C</span>
          </div>
          <div className="flex flex-col items-center">
            <Signal className="h-4 w-4 text-muted-foreground mb-1" />
            <span className="text-sm font-mono">{signalStrength}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RobotCard;