import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  iconColor: string;
  tag: string;
  delay: number;
}

const ModuleCard = ({ icon: Icon, title, description, color, iconColor, tag, delay }: ModuleCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group cursor-pointer rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 opacity-0 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className={`inline-flex rounded-lg p-3 ${color}`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          {tag}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      {expanded && (
        <div className="mt-4 rounded-lg bg-muted p-4 text-sm text-muted-foreground">
          <p>點擊以了解更多此模組的詳細內容。每個模組包含互動練習和實際應用示範。</p>
        </div>
      )}
    </div>
  );
};

export default ModuleCard;
