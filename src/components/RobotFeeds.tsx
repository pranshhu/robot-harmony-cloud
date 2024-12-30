import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const RobotFeeds = () => {
  return (
    <Tabs defaultValue="feed-1" className="w-full">
      <TabsList className="w-full">
        {[1, 2, 3, 4].map((feed) => (
          <TabsTrigger key={feed} value={`feed-${feed}`} className="flex-1">
            Camera {feed}
          </TabsTrigger>
        ))}
      </TabsList>
      {[1, 2, 3, 4].map((feed) => (
        <TabsContent key={feed} value={`feed-${feed}`}>
          <Card>
            <CardContent className="p-2">
              <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Live Feed {feed}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default RobotFeeds;
