import { Brain, BookOpen, PenLine, ClipboardCheck, Users, Home, Lightbulb } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "首頁", url: "/", icon: Home },
  { title: "AI 知識", url: "/ai-knowledge", icon: BookOpen },
  { title: "提示詞技巧", url: "/prompt-skills", icon: Lightbulb },
  { title: "提示詞練習", url: "/practice", icon: PenLine },
  { title: "AI 知識測驗", url: "/quiz", icon: ClipboardCheck },
  { title: "家長指南", url: "/parent-guide", icon: Users },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-border p-4">
        <Link to="/" className="flex items-center gap-2.5">
          <Brain className="h-7 w-7 flex-shrink-0 text-primary" />
          {!collapsed && (
            <span className="text-lg font-bold text-foreground">AI 親子學堂</span>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>導航</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink
                      to={item.url}
                      end
                      className="hover:bg-muted/50"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4">
        {!collapsed && (
          <p className="text-xs text-muted-foreground">
            基於 ISE 親子科技教育工作坊
          </p>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
