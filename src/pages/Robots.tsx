import RobotCard from "@/components/RobotCard";
    import PageHeader from "@/components/PageHeader";

    const mockRobots = [
      { name: "Robot-A1", status: "online", battery: 87, temperature: 42, signalStrength: 95, id: "1" },
      { name: "Robot-B2", status: "online", battery: 92, temperature: 38, signalStrength: 88, id: "2" },
      { name: "Robot-C3", status: "error", battery: 23, temperature: 58, signalStrength: 45, id: "3" },
      { name: "Robot-D4", status: "offline", battery: 0, temperature: 21, signalStrength: 0, id: "4" },
    ] as const;

    const Robots = () => {
      return (
        <div>
          <PageHeader title="Robots" description="Manage and monitor your robots" />
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8">
            {mockRobots.map((robot) => (
              <RobotCard key={robot.name} {...robot} />
            ))}
          </div>
        </div>
      );
    };

    export default Robots;
