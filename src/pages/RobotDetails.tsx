import { useParams } from "react-router-dom";
import { useState } from "react";
import RobotHeader from "@/components/RobotHeader";
import RobotPanels from "@/components/RobotPanels";
import PageHeader from "@/components/PageHeader";

const RobotDetails = () => {
  const { id } = useParams();
  const [isOn, setIsOn] = useState(true);
  const [isLayoutLocked, setIsLayoutLocked] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [settings, setSettings] = useState({
    camera1: true,
    camera2: true,
    camera3: true,
    camera4: true,
    ramUsage: true,
    cpuUsage: true,
    liveFeedFps: false,
    fleetTemp: true,
    cpuTemp: true,
    speed: false,
    battery: true,
    latency: true,
  });

  // Mock data for the robot
  const robotData = {
    name: `Robot-${id}`,
    battery: 87,
    temperature: 42,
    cpuUtilization: 65,
    networkSpeed: "120 Mbps",
    status: "online" as const,
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const controlProps = {
    isOn,
    setIsOn,
    isFullscreen,
    toggleFullscreen,
    isLayoutLocked,
    setIsLayoutLocked,
    settings,
    setSettings,
  };

  return (
    <div>
      <PageHeader title={robotData.name} description="Robot Control Interface" />
      <RobotHeader
        robotName={robotData.name}
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
        controlProps={controlProps}
      />
      <RobotPanels isLayoutLocked={isLayoutLocked} />
    </div>
  );
};

export default RobotDetails;