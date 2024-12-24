import { useParams } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";
import RobotHeader from "@/components/RobotHeader";
import RobotPanels from "@/components/RobotPanels";

const RobotDetails = () => {
  const { id } = useParams();
  const [isOn, setIsOn] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isLayoutLocked, setIsLayoutLocked] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
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
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {isSidebarVisible && <AppSidebar />}
        <main className={`flex-1 p-4 md:p-8 transition-all duration-300 ${!isSidebarVisible ? 'ml-0' : ''}`}>
          <RobotHeader
            robotName={robotData.name}
            isSidebarVisible={isSidebarVisible}
            setIsSidebarVisible={setIsSidebarVisible}
            controlProps={controlProps}
          />
          <RobotPanels isLayoutLocked={isLayoutLocked} />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default RobotDetails;