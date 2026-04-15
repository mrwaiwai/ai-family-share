import { Brain } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-8">
    <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center">
      <div className="flex items-center gap-2">
        <Brain className="h-5 w-5 text-primary" />
        <span className="font-semibold text-foreground">AI 親子學堂</span>
      </div>
    </div>
  </footer>
);

export default Footer;
