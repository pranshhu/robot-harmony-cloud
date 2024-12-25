import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import RobotFeeds from "./RobotFeeds";
import RobotAlerts from "./RobotAlerts";
import RobotLocation from "./RobotLocation";
import RobotDepthMap from "./RobotDepthMap";

interface RobotPanelsProps {
  isLayoutLocked: boolean;
}

const RobotPanels = ({ isLayoutLocked }: RobotPanelsProps) => {
  return (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[500px] md:min-h-[800px] w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={60}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={25}>
            <div className="p-2 md:p-4">
              <RobotFeeds />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle disabled={isLayoutLocked} />
          <ResizablePanel defaultSize={25}>
            <div className="p-2 md:p-4">
              <RobotFeeds />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle disabled={isLayoutLocked} />
          <ResizablePanel defaultSize={25}>
            <div className="p-2 md:p-4">
              <RobotFeeds />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle disabled={isLayoutLocked} />
          <ResizablePanel defaultSize={25}>
            <div className="p-2 md:p-4">
              <RobotAlerts />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle disabled={isLayoutLocked} />
      <ResizablePanel defaultSize={40}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>
            <div className="p-2 md:p-4">
              <RobotLocation />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle disabled={isLayoutLocked} />
          <ResizablePanel defaultSize={50}>
            <div className="p-2 md:p-4">
              <RobotDepthMap />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default RobotPanels;