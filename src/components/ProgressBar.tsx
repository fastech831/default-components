import { Progress } from "./ui/progress";

interface ProgressItem {
  id: string;
  label: string;
  value: number;
  maxValue?: number;
  color?: string;
  showPercentage?: boolean;
}

interface ProgressBarProps {
  items: ProgressItem[];
  title?: string;
  variant?: "default" | "skills";
}

export function ProgressBar({ 
  items, 
  title, 
  variant = "default" 
}: ProgressBarProps) {
  return (
    <div className="space-y-6">
      {title && (
        <h3 className="text-lg font-medium">{title}</h3>
      )}
      
      <div className="space-y-4">
        {items.map((item) => {
          const percentage = ((item.value / (item.maxValue || 100)) * 100);
          
          return (
            <div key={item.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{item.label}</span>
                {(item.showPercentage !== false) && (
                  <span className="text-sm text-muted-foreground">
                    {Math.round(percentage)}%
                  </span>
                )}
              </div>
              
              <Progress 
                value={percentage} 
                className="h-2"
              />
              
              {variant === "skills" && (
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}