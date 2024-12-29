import { useParams } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";
import RobotHeader from "@/components/RobotHeader";
import RobotPanels from "@/components/RobotPanels";
import { Link } from "react-router-dom";
import { LayoutDashboard, Bot, Bell, Settings, Activity, Users } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const menuItems = [
  { icon: LayoutDashboard, title: "Dashboard", url: "/" },
  { icon: Bot, title: "Robots", url: "/robots" },
  { icon: Activity, title: "Telemetry", url: "/telemetry" },
  { icon: Bell, title: "Alerts", url: "/alerts" },
  { icon: Users, title: "Team", url: "/team" },
  { icon: Settings, title: "Settings", url: "/settings" },
];

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
        <main className={`flex-1 p-4 md:p-8 transition-all duration-300 ${!isSidebarVisible ? 'ml-0' : ''}`}>
          <div className="flex items-center space-x-2 mb-8">
            <SidebarTrigger />
            <nav className="flex items-center space-x-1">
              <TooltipProvider delayDuration={0}>
                {menuItems.map((item) => (
                  <Tooltip key={item.title}>
                    <TooltipTrigger asChild>
                      <Link
                        to={item.url}
                        className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent transition-colors"
                        aria-label={item.title}
                      >
                        <item.icon className="h-5 w-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-popover/80 backdrop-blur-sm">
                      {item.title}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </nav>
          </div>
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