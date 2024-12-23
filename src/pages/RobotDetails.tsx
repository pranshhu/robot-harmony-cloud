import { useParams } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Battery, Cpu, Network, ThermometerSun, PanelLeftClose, PanelLeftOpen, Maximize2, Lock, Unlock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import RobotFeeds from "@/components/RobotFeeds";
import RobotLocation from "@/components/RobotLocation";
import RobotDepthMap from "@/components/RobotDepthMap";
import RobotAlerts from "@/components/RobotAlerts";
import RobotSettings from "@/components/RobotSettings";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

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

  // Mock data - in a real app, this would come from an API
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

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {isSidebarVisible && <AppSidebar />}
        <main className={`flex-1 p-8 transition-all duration-300 ${!isSidebarVisible ? 'ml-0' : ''}`}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">{robotData.name}</h1>
              <p className="text-muted-foreground">Robot Control Interface</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsSidebarVisible(!isSidebarVisible)}
              >
                {isSidebarVisible ? (
                  <PanelLeftClose className="h-4 w-4" />
                ) : (
                  <PanelLeftOpen className="h-4 w-4" />
                )}
              </Button>
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
                currentSettings={settings}
                onSettingsChange={setSettings}
              />
              <span className="text-sm text-muted-foreground">Power</span>
              <Switch checked={isOn} onCheckedChange={setIsOn} />
            </div>
          </div>

          <ResizablePanelGroup
            direction="vertical"
            className="min-h-[800px] w-full rounded-lg border"
          >
            <ResizablePanel defaultSize={60}>
              <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={70}>
                  <div className="p-4">
                    <RobotFeeds />
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle disabled={isLayoutLocked} />
                <ResizablePanel defaultSize={30}>
                  <div className="p-4">
                    <RobotAlerts />
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle withHandle disabled={isLayoutLocked} />
            <ResizablePanel defaultSize={40}>
              <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={50}>
                  <div className="p-4">
                    <RobotLocation />
                  </div>
                </ResizablePanel>
                <ResizableHandle withHandle disabled={isLayoutLocked} />
                <ResizablePanel defaultSize={50}>
                  <div className="p-4">
                    <RobotDepthMap />
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
          </ResizablePanelGroup>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default RobotDetails;