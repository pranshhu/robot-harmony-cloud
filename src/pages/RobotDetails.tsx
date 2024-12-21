import { useParams } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Battery, Cpu, Network, ThermometerSun, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const RobotDetails = () => {
  const { id } = useParams();
  const [isOn, setIsOn] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // Mock data - in a real app, this would come from an API
  const robotData = {
    name: `Robot-${id}`,
    battery: 87,
    temperature: 42,
    cpuUtilization: 65,
    networkSpeed: "120 Mbps",
    status: "online" as const,
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
                className="mr-4"
              >
                {isSidebarVisible ? (
                  <PanelLeftClose className="h-4 w-4" />
                ) : (
                  <PanelLeftOpen className="h-4 w-4" />
                )}
              </Button>
              <span className="text-sm text-muted-foreground">Power</span>
              <Switch checked={isOn} onCheckedChange={setIsOn} />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Live Feed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Video feed not available in demo</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Battery className="h-5 w-5" />
                  Power Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Battery Level</span>
                      <span className="text-sm text-muted-foreground">{robotData.battery}%</span>
                    </div>
                    <Progress value={robotData.battery} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ThermometerSun className="h-5 w-5" />
                  Temperature
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">CPU Temperature</span>
                      <span className="text-sm text-muted-foreground">{robotData.temperature}°C</span>
                    </div>
                    <Progress value={(robotData.temperature / 100) * 100} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5" />
                  CPU Utilization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Usage</span>
                      <span className="text-sm text-muted-foreground">{robotData.cpuUtilization}%</span>
                    </div>
                    <Progress value={robotData.cpuUtilization} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-5 w-5" />
                  Network Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Connection Speed</span>
                    <span className="text-sm text-muted-foreground">{robotData.networkSpeed}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default RobotDetails;