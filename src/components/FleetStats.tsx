import { RocketIcon, AlertTriangle, BatteryMedium, Wifi } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, change }: any) => (
  <div className="flex items-center space-x-4 rounded-lg border p-4">
    <div className="bg-primary/10 p-2 rounded-full">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <div className="flex items-baseline space-x-2">
        <h3 className="text-2xl font-bold">{value}</h3>
        {change && (
          <span className={`text-xs ${change > 0 ? "text-green-500" : "text-red-500"}`}>
            {change > 0 ? "+" : ""}{change}%
          </span>
        )}
      </div>
    </div>
  </div>
);

const FleetStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        icon={RocketIcon}
        label="Active Robots"
        value="12"
        change={2.5}
      />
      <StatCard
        icon={AlertTriangle}
        label="Critical Alerts"
        value="3"
        change={-1.5}
      />
      <StatCard
        icon={BatteryMedium}
        label="Avg. Battery"
        value="78%"
        change={-0.8}
      />
      <StatCard
        icon={Wifi}
        label="Connection Status"
        value="98%"
        change={0.2}
      />
    </div>
  );
};

export default FleetStats;
