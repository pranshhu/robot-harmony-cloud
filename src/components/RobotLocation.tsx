import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const RobotLocation = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          GPS Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-[16/9] bg-secondary/50 rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Map View</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RobotLocation;
