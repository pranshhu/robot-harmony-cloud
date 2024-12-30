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
  controlProps,
}: RobotHeaderProps) => {
  return (
    <div className="flex justify-end mb-4">
      <RobotControls {...controlProps} />
    </div>
  );
};

export default RobotHeader;