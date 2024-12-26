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
  controlProps,
}: RobotHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">{robotName}</h1>
        <p className="text-muted-foreground">Robot Control Interface</p>
      </div>
      <RobotControls {...controlProps} />
    </div>
  );
};

export default RobotHeader;