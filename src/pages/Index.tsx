import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import FleetStats from "@/components/FleetStats";
import RobotCard from "@/components/RobotCard";

const mockRobots = [
  { name: "Robot-A1", status: "online", battery: 87, temperature: 42, signalStrength: 95 },
  { name: "Robot-B2", status: "online", battery: 92, temperature: 38, signalStrength: 88 },
  { name: "Robot-C3", status: "error", battery: 23, temperature: 58, signalStrength: 45 },
  { name: "Robot-D4", status: "offline", battery: 0, temperature: 21, signalStrength: 0 },
  { name: "Robot-E5", status: "online", battery: 78, temperature: 44, signalStrength: 92 },
  { name: "Robot-F6", status: "online", battery: 85, temperature: 41, signalStrength: 87 },
] as const;

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Fleet Dashboard</h1>
              <p className="text-muted-foreground">Monitor and manage your robot fleet</p>
            </div>
            <SidebarTrigger />
          </div>
          
          <FleetStats />
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Active Robots</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockRobots.map((robot) => (
              <RobotCard key={robot.name} {...robot} />
            ))}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;