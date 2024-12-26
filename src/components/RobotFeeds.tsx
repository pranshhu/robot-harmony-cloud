import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RobotFeeds = () => {
  return (
    <div className="grid gap-4">
      {[1, 2, 3, 4].map((feed) => (
        <Card key={feed}>
          <CardHeader className="p-2">
            <CardTitle className="text-sm">Camera Feed {feed}</CardTitle>
          </CardHeader>
          <CardContent className="p-2">
            <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Live Feed {feed}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RobotFeeds;