import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Camera } from "lucide-react";

const RobotFeeds = () => {
  return (
    <Tabs defaultValue="feed-1" className="w-full">
      <TabsList className="w-full grid grid-cols-4">
        {[1, 2, 3, 4].map((feed) => (
          <TabsTrigger key={feed} value={`feed-${feed}`} className="flex items-center gap-2">
            <Camera className="h-4 w-4" />
            <span className="hidden sm:inline">Camera {feed}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {[1, 2, 3, 4].map((feed) => (
        <TabsContent key={feed} value={`feed-${feed}`}>
          <Card>
            <CardContent className="p-2">
              <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                <p className="text-muted-foreground relative z-10 flex items-center gap-2">
                  <Camera className="h-5 w-5" />
                  Live Feed {feed}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default RobotFeeds;