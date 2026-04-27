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
  { title: "首頁", url: "/", icon: Home, chip: "bg-bubble-yellow" },
  { title: "AI 知識", url: "/ai-knowledge", icon: BookOpen, chip: "bg-bubble-pink" },
  { title: "提示詞技巧", url: "/prompt-skills", icon: Lightbulb, chip: "bg-teal-light" },
  { title: "提示詞練習", url: "/practice", icon: PenLine, chip: "bg-coral-light" },
  { title: "AI 知識測驗", url: "/quiz", icon: ClipboardCheck, chip: "bg-bubble-green" },
  { title: "家長指南", url: "/parent-guide", icon: Users, chip: "bg-bubble-yellow" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar collapsible="icon" className="border-r-[3px] border-ink bg-sidebar shadow-playful">
      <SidebarHeader className="border-b-[3px] border-ink p-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-ink bg-bubble-yellow shadow-playful">
            <Brain className="h-6 w-6 flex-shrink-0 text-ink" />
          </div>
          {!collapsed && (
            <div>
              <span className="font-display text-lg font-extrabold leading-none text-ink">家長 AI 學習指南</span>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-ink/65">Parent AI Learning Guide</p>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 pt-4 font-display text-sm font-extrabold uppercase tracking-[0.28em] text-ink/70">
            導航地圖
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2 px-3 py-3">
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink
                      to={item.url}
                      end
                      className="rounded-[1.4rem] border-[3px] border-transparent px-3 py-3 transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-white hover:shadow-playful"
                      activeClassName="border-ink bg-white font-bold text-ink shadow-playful"
                    >
                      <span className={`mr-2 flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-ink ${item.chip}`}>
                        <item.icon className="h-4 w-4 text-ink" />
                      </span>
                      {!collapsed && <span className="font-bold text-ink">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t-[3px] border-ink p-4">
        {!collapsed && (
          <div className="rounded-[1.5rem] border-[3px] border-ink bg-white p-4 shadow-playful">
            <p className="font-display text-base font-extrabold text-ink">家長陪伴學習重點</p>
            <p className="mt-1 text-sm font-semibold leading-relaxed text-ink/70">
              先學 AI，再更有信心陪孩子使用
            </p>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
