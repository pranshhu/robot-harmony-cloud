import { Button } from "@/components/ui/button";
import { Settings2, Maximize2, Power, Lock, Unlock } from "lucide-react";
import RobotSettings from "./RobotSettings";

interface RobotControlsProps {
  isOn: boolean;
  setIsOn: (value: boolean) => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  isLayoutLocked: boolean;
  setIsLayoutLocked: (value: boolean) => void;
  settings: any;
  setSettings: (settings: any) => void;
}

const RobotControls = ({
  isOn,
  setIsOn,
  isFullscreen,
  toggleFullscreen,
  isLayoutLocked,
  setIsLayoutLocked,
  settings,
  setSettings,
}: RobotControlsProps) => {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsLayoutLocked(!isLayoutLocked)}
      >
        {isLayoutLocked ? (
          <Lock className="h-4 w-4" />
        ) : (
          <Unlock className="h-4 w-4" />
        )}
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleFullscreen}
      >
        <Maximize2 className="h-4 w-4" />
      </Button>
      <RobotSettings
        onSettingsChange={setSettings}
        currentSettings={settings}
      />
      <Button
        variant={isOn ? "default" : "destructive"}
        size="icon"
        onClick={() => setIsOn(!isOn)}
      >
        <Power className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default RobotControls;