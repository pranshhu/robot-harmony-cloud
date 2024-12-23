import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RobotFeeds = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((feed) => (
        <Card key={feed}>
          <CardHeader>
            <CardTitle className="text-sm">Camera Feed {feed}</CardTitle>
          </CardHeader>
          <CardContent>
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