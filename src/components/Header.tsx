import { Brain, BookOpen, Users, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <Brain className="h-7 w-7 text-primary" />
          <span className="text-lg font-bold text-foreground">AI 親子學堂</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#modules" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <BookOpen className="mr-1 inline h-4 w-4" />
            學習模組
          </a>
          <a href="#parent-guide" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            <Users className="mr-1 inline h-4 w-4" />
            家長指南
          </a>
          <a href="#prompt-skills" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            提示詞技巧
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-card p-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a href="#modules" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>學習模組</a>
            <a href="#parent-guide" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>家長指南</a>
            <a href="#prompt-skills" className="text-sm font-medium text-muted-foreground" onClick={() => setMobileOpen(false)}>提示詞技巧</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
