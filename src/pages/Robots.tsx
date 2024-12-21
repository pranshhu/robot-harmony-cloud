import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import RobotCard from "@/components/RobotCard";

const mockRobots = [
  { name: "Robot-A1", status: "online", battery: 87, temperature: 42, signalStrength: 95 },
  { name: "Robot-B2", status: "online", battery: 92, temperature: 38, signalStrength: 88 },
  { name: "Robot-C3", status: "error", battery: 23, temperature: 58, signalStrength: 45 },
  { name: "Robot-D4", status: "offline", battery: 0, temperature: 21, signalStrength: 0 },
] as const;

const Robots = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Robots</h1>
              <p className="text-muted-foreground">Manage and monitor your robots</p>
            </div>
            <SidebarTrigger />
          </div>
          
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

export default Robots;