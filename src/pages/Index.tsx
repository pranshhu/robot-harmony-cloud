import FleetStats from "@/components/FleetStats";
    import RobotCard from "@/components/RobotCard";
    import PageHeader from "@/components/PageHeader";

    const mockRobots = [
      { name: "Robot-A1", status: "online", battery: 87, temperature: 42, signalStrength: 95, id: "1" },
      { name: "Robot-B2", status: "online", battery: 92, temperature: 38, signalStrength: 88, id: "2" },
      { name: "Robot-C3", status: "error", battery: 23, temperature: 58, signalStrength: 45, id: "3" },
      { name: "Robot-D4", status: "offline", battery: 0, temperature: 21, signalStrength: 0, id: "4" },
      { name: "Robot-E5", status: "online", battery: 78, temperature: 44, signalStrength: 92, id: "5" },
      { name: "Robot-F6", status: "online", battery: 85, temperature: 41, signalStrength: 87, id: "6" },
    ] as const;

    const Index = () => {
      return (
        <div>
          <PageHeader title="Fleet Dashboard" description="Monitor and manage your robot fleet" />
          
          <div className="mt-8">
            <FleetStats />
          </div>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Active Robots</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {mockRobots.map((robot) => (
              <RobotCard key={robot.name} {...robot} />
            ))}
          </div>
        </div>
      );
    };

    export default Index;
