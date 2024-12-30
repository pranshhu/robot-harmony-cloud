import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import React from "react";
import { cn } from "@/lib/utils";

interface SidebarMenuItemProps {
  url: string;
  icon: React.ComponentType;
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
    <SidebarMenuItem>
      <Link 
        to={url} 
        className={cn("flex items-center gap-2", className)}
      >
        <Icon className="h-4 w-4" />
        <span>{title}</span>
      </Link>
    </SidebarMenuItem>
  );
};

export default SidebarMenuItemComponent;