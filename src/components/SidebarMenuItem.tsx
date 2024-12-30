import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import React from "react";

interface SidebarMenuItemProps {
  url: string;
  icon: React.ComponentType;
  title: string;
  isActive: boolean;
  className?: string;  // Add optional className prop
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
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className={className}  // Pass className to SidebarMenuButton
      >
        <Link to={url} className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          <span>{title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default SidebarMenuItemComponent;