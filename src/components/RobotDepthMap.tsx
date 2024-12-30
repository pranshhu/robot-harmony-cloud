import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers } from "lucide-react";

const RobotDepthMap = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Layers className="h-5 w-5" />
          Depth Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-[16/9] bg-secondary/50 rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Depth Map Visualization</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RobotDepthMap;
