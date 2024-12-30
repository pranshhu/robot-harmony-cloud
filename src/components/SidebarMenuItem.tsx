import { SidebarMenuButton } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarMenuItemProps {
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  isActive: boolean;
  className?: string;
}

const SidebarMenuItemComponent = ({ 
  url, 
  icon: Icon, 
  title, 
  isActive,
  className 
}: SidebarMenuItemProps) => {
  return (
    <SidebarMenuButton asChild>
      <Link 
        to={url} 
        className={cn(
          "flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded-md transition-colors",
          isActive && "bg-accent text-accent-foreground",
          "hover:bg-accent/50",
          className
        )}
      >
        <Icon className="h-4 w-4 shrink-0" />
        <span className="truncate">{title}</span>
      </Link>
    </SidebarMenuButton>
  );
};

export default SidebarMenuItemComponent;