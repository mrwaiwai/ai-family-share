import { LucideIcon, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ModuleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  iconColor: string;
  tag: string;
  delay: number;
  details: string[];
  keyPoints?: { label: string; value: string }[];
}

const ModuleCard = ({ icon: Icon, title, description, color, iconColor, tag, delay, details, keyPoints }: ModuleCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg opacity-0 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        className="w-full p-6 text-left"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="mb-4 flex items-center justify-between">
          <div className={`inline-flex rounded-lg p-3 ${color}`}>
            <Icon className={`h-6 w-6 ${iconColor}`} />
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              {tag}
            </span>
            {expanded ? (
              <ChevronUp className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            )}
          </div>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </button>

      {expanded && (
        <div className="border-t border-border px-6 pb-6 pt-4">
          <ul className="space-y-2.5">
            {details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {d}
              </li>
            ))}
          </ul>
          {keyPoints && keyPoints.length > 0 && (
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {keyPoints.map((kp, i) => (
                <div key={i} className="rounded-lg bg-muted p-3">
                  <p className="text-xs font-medium text-muted-foreground">{kp.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">{kp.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ModuleCard;
