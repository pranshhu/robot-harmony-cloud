import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Settings2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface RobotSettingsProps {
  onSettingsChange: (settings: any) => void;
  currentSettings: any;
}

const RobotSettings = ({ onSettingsChange, currentSettings }: RobotSettingsProps) => {
  const features = [
    { id: "camera1", label: "Camera Feed 1" },
    { id: "camera2", label: "Camera Feed 2" },
    { id: "camera3", label: "Camera Feed 3" },
    { id: "camera4", label: "Camera Feed 4" },
    { id: "ramUsage", label: "RAM Usage" },
    { id: "cpuUsage", label: "CPU Usage" },
    { id: "liveFeedFps", label: "Live Feed FPS" },
    { id: "fleetTemp", label: "Fleet Temperature" },
    { id: "cpuTemp", label: "CPU Temperature" },
    { id: "speed", label: "Speed" },
    { id: "battery", label: "Battery Percentage" },
    { id: "latency", label: "Latency" },
  ];

  const handleFeatureToggle = (featureId: string, checked: boolean) => {
    onSettingsChange({
      ...currentSettings,
      [featureId]: checked,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Robot Display Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center space-x-2">
              <Checkbox
                id={feature.id}
                checked={currentSettings[feature.id]}
                onCheckedChange={(checked) => handleFeatureToggle(feature.id, checked as boolean)}
              />
              <Label htmlFor={feature.id}>{feature.label}</Label>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RobotSettings;