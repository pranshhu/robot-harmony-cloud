import { Button } from "@/components/ui/button";
import { Navigation, NavigationOff } from "lucide-react";
import RobotControls from "./RobotControls";

interface RobotHeaderProps {
  robotName: string;
  isSidebarVisible: boolean;
  setIsSidebarVisible: (visible: boolean) => void;
  controlProps: {
    isOn: boolean;
    setIsOn: (on: boolean) => void;
    isFullscreen: boolean;
    toggleFullscreen: () => void;
    isLayoutLocked: boolean;
    setIsLayoutLocked: (locked: boolean) => void;
    settings: any;
    setSettings: (settings: any) => void;
  };
}

const RobotHeader = ({
  robotName,
  isSidebarVisible,
  setIsSidebarVisible,
  controlProps,
}: RobotHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          className="mr-4"
        >
          {isSidebarVisible ? (
            <NavigationOff className="h-4 w-4" />
          ) : (
            <Navigation className="h-4 w-4" />
          )}
        </Button>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{robotName}</h1>
          <p className="text-muted-foreground">Robot Control Interface</p>
        </div>
      </div>
      <RobotControls {...controlProps} />
    </div>
  );
};

export default RobotHeader;