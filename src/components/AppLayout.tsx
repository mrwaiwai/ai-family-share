import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 flex h-16 items-center border-b-[3px] border-ink bg-background/85 px-4 backdrop-blur-md">
            <SidebarTrigger className="mr-4 rounded-full border-[3px] border-ink bg-bubble-yellow p-2 text-ink shadow-playful transition-transform hover:-translate-y-0.5" />
            <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-4 py-1.5 shadow-playful">
              <span className="text-xl">🌈</span>
              <span className="font-display text-base font-extrabold tracking-wide text-ink">家長 AI 學習指南</span>
            </div>
          </header>
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
